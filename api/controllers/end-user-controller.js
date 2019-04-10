'use strict'

const endUserDao = require('../../db/dao/end-user-dao')


async function createEndUser (req, res, next) {
  const endUserName = req.swagger.params.end_user.value.name
  const endUser = { name: endUserName }
  try {
    const [endUserId] = await endUserDao.create(endUser)
    console.log('enduser Created', endUserId)
    res.status(201).json({ id: endUserId })
  } catch (err) {
    console.log('createEndUser(): an error has ocurred creating user: ', endUser, err.message)
    next()
  }

}

const API = {
  createEndUser
}

module.exports = API
