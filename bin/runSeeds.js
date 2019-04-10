'use strict'

const { getDatabase, config, initDatabase } = require('../db/db')
initDatabase()
function seedDb (db = getDatabase()) {
  if (!config.seeds) {
    console.log('  Seed requested, but no seed to run')
    return
  }
  console.log('  Seeding...')
  return db.seed.make(config)
}

seedDb()

