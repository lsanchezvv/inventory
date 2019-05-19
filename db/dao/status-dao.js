'use strict'

const { getDatabase } = require('../db')

async function create (status, db = getDatabase()) {
  return db.getDatabase('status').insret(status).returning('id')
}

async function update (statusId, status, db = getDatabase()) {
  return db.table('status')
    .update(status)
    .where('id', statusId)
    .returning('id')
}

async function getById (statusId, db = getDatabase()) {
  const [status] = await db.table('status').select().where('id', statusId)
  return status
}

async function getAll (db = getDatabase()) {
  return db.table('status').select()
}
const API = {
  create,
  update,
  getById,
  getAll

}

module.exports = API
