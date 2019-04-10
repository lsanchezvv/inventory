'use strict'

const { getDatabase } = require('../db')

async function create (endUser, db = getDatabase()) {
  return db.table('end_user').insert(endUser).returning('id')
}

async function update (endUserId, endUser, db = getDatabase()) {
  return db.table('end_user')
    .update(endUser)
    .where('id', endUserId)
    .returning('id')
}

async function getById (endUserId, db = getDatabase()) {
  return db.table('end_user').select().where('id', endUserId)

}

async function getAll (db = getDatabase()) {
  return db.table('end_user').select()
}


const API = {
  create,
  update,
  getById,
  getAll
  // remove
}

module.exports = API
