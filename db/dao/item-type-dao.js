'use strict'

const { getDatabase } = require('../db')

async function create (itemType, db = getDatabase()) {
  return db.table('item_type').insert(itemType).returning('id')
}

async function update (itemTypeId, itemType, db = getDatabase()) {
  return db.table('item_type')
    .update(itemType)
    .where('id', itemTypeId)
    .returning('id')

}

async function getById (itemTypeId, db = getDatabase()) {
  const [itemType] = await db.table('item_type').select().where('id', itemTypeId)
  return itemType

}

async function getAll (db = getDatabase()) {
  return db.table('item_type').select()
}

const API = {
  create,
  update,
  getById,
  getAll
}

module.exports = API
