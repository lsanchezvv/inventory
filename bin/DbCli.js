'use strict'

const { getDatabase, config, initDatabase } = require('../db/db')
const program = require('commander')

async function resetDb (db) {
  console.log('[resetDb.js] resetDb()  Resetting public schema...')

  return db.schema.raw(`DROP SCHEMA public CASCADE`)
    .catch((err) => {
      if (!err.message.match(/schema "public" does not exist/)) {
        throw err
      }
    })
    .then(() => db.schema.raw(`CREATE SCHEMA public`))
    .then(() => db.schema.raw(`GRANT ALL ON SCHEMA public TO ${config.connection.user}`))
    .then(() => db.schema.raw(`GRANT ALL ON SCHEMA public TO public`))
}

function seedDb (db) {
  if (!config.seeds) {
    console.log('  Seed requested, but no seed to run')
    return
  }
  console.log('  Seeding...')
  return db.seed.run(config)
}
function migrateDb (db) {
  if (!config.migrations) {
    console.log('  Migration requested, but no migrations to run')
    return
  }
  console.log('  Running migrations...')
  return db.migrate.latest()
}
function CLI () {
  program
    .option('--reset', 'Reset the default public schema for the database')
    .option('--migrate', 'Runs latest database migrations')
    .option('--seed', 'Runs database seeds')
    .parse(process.argv)

  const { reset, migrate, seed } = program

  if (!reset && !migrate && !seed) {
    program.outputHelp()
    return process.exit(1)
  }
  return { reset, migrate, seed }
}

const options = CLI()

if (!options) {
  module.exports = Promise.resolve()
} else {
  const { reset, migrate, seed } = options
  module.exports = Promise.resolve().then(() => {
    initDatabase()
    const db = getDatabase()
    return Promise.resolve()
      .then(() => reset && resetDb(db))
      .then(() => migrate && migrateDb(db))
      .then(() => seed && seedDb(db))
      .catch(err => {
        db.destroy()
        throw err
      })
  }).then(() => {
    console.log('done')
    return process.exit(0)
  })
    .catch(err => {
      console.log('An error has ocurred', err.message)
      return process.exit(1)
    })
}
