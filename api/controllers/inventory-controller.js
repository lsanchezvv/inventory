'use strict'

const inventoryDao = require('../../db/dao/inventory-dao')

async function create (req, res, next) {
  const {
    item_id,
    status_id,
    location_id,
    end_user_id,
    comments
  } = req.swagger.params.inventory_entry.value
  const inventoryEntry = {
    item_id,
    status_id,
    location_id,
    end_user_id,
    comments
  }
  try {
    const [entryId] = await inventoryDao.create(inventoryEntry)
    console.log('Record created with Id: ', entryId)
    res.status(201).json({ id: entryId })
  } catch (error) {
    console.log('createEndUser(): an error has ocurred creating the inventory entry: ', inventoryEntry, error.message)
    next()

  }
}

// async function get (req, res, next) {

// }

// async function getAll (req, res, next) {

// }

// async function update (req, res, next) {

// }

const API = {
  create,
  // get,
  // getAll,
  // update
}

module.exports = API
