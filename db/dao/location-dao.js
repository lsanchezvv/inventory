'use strict'

const { getDatabase } = require('../db')

async function create (location, db = getDatabase()) {
  return db.table('location').insert(location).returning('id')
}

async function update (locationId, location, db = getDatabase()) {
  return db.table('location')
    .update(location)
    .where('id', locationId)
    .returning('id')

}

async function getById (locationId, db = getDatabase()) {
  const [location] = await db.table('location').select().where('id', locationId)
  return location
}
async function getAll (db = getDatabase()) {
  return db.table('location').select()
}
async function removeLocation () {

}

const API = {
  create,
  update,
  getById,
  getAll

}

module.exports = API
