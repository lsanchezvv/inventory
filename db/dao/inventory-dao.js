'use strict'

const { getDatabase } = require('../db')

async function create (entry, db = getDatabase()) {
  return db.table('inventory').insert(entry).returning('id')
}

async function update (entryId, entry, db = getDatabase()) {
  return db.table('inventory')
    .update(entry)
    .where('id', entryId)
    .returning('id')

}

async function getById (entryId, db = getDatabase()) {
  const [entry] = await db.table('inventory').select().where('id', entryId)
  return entry
}

async function getAll (db = getDatabase()) {
  return db.table('inventory').select()
}

const API = {
  create,
  update,
  getById,
  getAll

}

module.exports = API
