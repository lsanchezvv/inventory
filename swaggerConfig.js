const express = require('express')
const swaggerNodeRunner = require('swagger-node-runner')

function _createSwaggerExpress (config) {
  return new Promise((resolve, reject) => {
    swaggerNodeRunner.create(config, (error, runner) => {
      if (error) { return reject(error) }
      resolve(runner.expressMiddleware())
    })
  })
}

async function initSwagger (config) {
  const app = express()

  let swaggerExpress
  try {
    swaggerExpress = await API._createSwaggerExpress(config)
  } catch (error) {
    console.log(`ooops, an error has ocurred ${error}`)
    throw error
  }

  swaggerExpress.register(app)
  return app
}

const API = {
  _createSwaggerExpress,
  initSwagger
}

module.exports = API
