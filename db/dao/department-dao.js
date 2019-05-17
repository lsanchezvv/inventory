'use strict'

const { getDatabase } = require('../db')

async function create (department, db = getDatabase()) {
  return db.table('department').insert(department).returning('id')
}

async function update (departmentId, department, db = getDatabase()) {
  return db.table('department')
    .update(department)
    .where('id', departmentId)
    .returning('id')
}

async function getById (departmentId, db = getDatabase()) {
  const [department] = await db.table('department').select().where('id', departmentId)
  return department
}

async function getDepartmentList (db = getDatabase()) {
  return db.table('department').select()
}

async function remove () {

}

const API = {
  create,
  update,
  getById,
  getDepartmentList
}

module.exports = API
