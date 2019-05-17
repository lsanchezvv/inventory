'use strict'

const { getDatabase } = require('../db')

async function create (itemBrand, db = getDatabase()) {
  return db.table('item_brand').insert(itemBrand).returning('id')
}

async function update (itemBrandId, itemBrand, db = getDatabase()) {
  return db.table('item_brand')
    .update(itemBrand)
    .where('id', itemBrandId)
    .returning('id')
}

async function getById (itemBrandId, db = getDatabase()) {
  const [itemBrand] = await db.table('item_brand').select().where('id', itemBrandId)
  return itemBrand
}

async function getAll (db = getDatabase()) {
  return db.table('item_brand').select()
}

async function deleteBrand () {

}

const API = {
  create,
  update,
  getById,
  getAll
}

module.exports = API
