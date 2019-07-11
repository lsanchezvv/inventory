'use strict'

const itemDao = require('../../db/dao/item-dao')
const itemTypeDao = require('../../db/dao/item-type-dao')

async function create (req, res) {
  const {
    type_id,
    brand_id,
    model_no,
    serial_no,
    tag
  } = req.swagger.params.item.value

  try {
    const [id] = await itemDao.create({ type_id, brand_id, model_no, serial_no, tag })
    console.log('Item created with Id: ', id)
    res.status(201).json({ id })

  } catch (error) {
    console.log('create(): an error has ocurred creating the item: ', error.message)
    next()

  }
}

async function get (req, res) {
  const id = req.swagger.params.id.value
  try {
    const item = await itemDao.getById(id)
    console.log('Item obj', item)
    res.status(200).json({ item })
  } catch (error) {

  }
}

async function getAll (req, res) {
  try {
    const items = await itemDao.getAll()
    res.status(200).json({ items })
  } catch (error) {
    console.log('getAll(): an error has ocurred getting the entries', error.message)
    next()
  }

}

async function update (req, res) {

}

async function getAllItemTypes (req, res) {
  try {
    const itemTypes = await itemTypeDao.getAll()
    res.status(200).json({ itemTypes })
  } catch (error) {
    console.log('getAllItemTypes(): an error has ocurred getting Item Types', error.message)
    next()
  }
}

const API = {
  create,
  get,
  getAll,
  update,
  getAllItemTypes
}

module.exports = API
