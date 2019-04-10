'use strict'

require('dotenv').config
const appConfig = require('./app-config')
const PORT = process.env.PORT || 10014
const { initSwagger } = require('./swaggerConfig')
const db = require('./db/db')

async function InitApp () {
  await db.initDatabase()
  const app = await initSwagger(appConfig)
  app.listen(PORT)
  console.log(`Listening on port ${PORT}`)
}

InitApp()
