'use strict'
// item [table]
// id
// type_id
// brand_id
// model_no
// serial_no
// tag
// brand_id
// type_id

const { getDatabase } = require('../db')

async function create (item, db = getDatabase()) {
  return db.table('item').insert(item).returning('id')
}

async function update (itemId, item, db = getDatabase()) {
  return db.table('item')
    .update(item)
    .where('id', itemId)
    .returning('id')

}

async function getById (itemId, db = getDatabase()) {
  const [item] = await db.table('item').select().where('id', itemId)
  return item
}
async function getAll (db = getDatabase()) {
  return db.table('item').select()
}

async function remove () {

}

const API = {
  create,
  update,
  getById,
  getAll
}

module.exports = API
