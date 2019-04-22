'use strict'

const endUserDao = require('../../db/dao/end-user-dao')


async function createEndUser (req, res, next) {
  const { first_name, last_name, department_id } = req.swagger.params.end_user.value
  const endUser = {
    first_name,
    last_name,
    full_name: `${first_name} ${last_name}`,
    department_id
  }
  try {
    const [endUserId] = await endUserDao.create(endUser)
    console.log('enduser Created', endUserId)
    res.status(201).json({ id: endUserId })
  } catch (err) {
    console.log('createEndUser(): an error has ocurred creating user: ', endUser, err.message)
    next()
  }

}

async function getAll (req, res, next) {
  try {
    const endUserList = await endUserDao.getAll()
    res.status(200).json({ users: endUserList })
  } catch (error) {
    console.log('getAllEndUsers(): an error has ocurred getting all users')
    next()
  }
}

async function get (req, res, next) {
  const userId = req.swagger.params.id.value
  console.log(userId)
  try {
    const user = await endUserDao.getById(userId)
    if (user) {
      res.status(200).json({ user })
    } else {
      res.status(400).send()
    }
  } catch (error) {
    console.log('getAllEndUsers(): an error has ocurred getting all users')
    next()
  }
}

const API = {
  createEndUser,
  getAll,
  get
}

module.exports = API
