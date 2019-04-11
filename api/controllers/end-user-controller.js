'use strict'

const endUserDao = require('../../db/dao/end-user-dao')


async function createEndUser (req, res, next) {
  const { firstName, lastName, departmentId } = req.swagger.params.end_user.value
  const endUser = {
    first_name: firstName,
    last_name: lastName,
    full_name: `${firstName} ${lastName}`,
    department_id: departmentId
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

async function getAllEndUsers (req, res, next) {
  try {
    const endUserList = await endUserDao.getAll()
    console.log(endUserList)
    res.status(200).send()
  } catch (error) {
    console.log('getAllEndUsers(): an error has ocurred getting all users')
    next()
  }
}

const API = {
  createEndUser,
  getAllEndUsers
}

module.exports = API
