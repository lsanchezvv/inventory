'use strict'

const itemDao = require('../../db/dao/item-dao')

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

const API = {
  create,
  get,
  getAll,
  update
}

module.exports = API
