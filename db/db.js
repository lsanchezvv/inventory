'use strict'

const knex = require('knex')

const config = {
  client: 'pg',
  version: '7.2',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'localhost_inventory'
  },
  pool: {
    min: 1
  },
  migrations: { directory: './db/migrations' },
  seeds: { directory: './db/seeds' }
}

let knexInstance

function initDatabase () {
  if (knexInstance) {
    return knexInstance
  }
  console.log('[db.js] initDatabase(): Initializing Database')
  knexInstance = knex(config)
  return knexInstance
}

function getDatabase () {
  if (!knexInstance) {
    console.log('[db.js] getDatabase() knexInstance not initialized yet. Must call initDatabase first')
  }
  return knexInstance
}

async function destroyDatabase () {
  if (knexInstance) {
    console.log('[db.js] destroyDatabase(): Destroying Database')
    await knexInstance.destroy()
  }
  knexInstance = undefined
}

const API = {
  initDatabase,
  getDatabase,
  destroyDatabase,
  config
}

module.exports = API
