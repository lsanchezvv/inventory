'use strict'

const winston = require('winston')

function getLogger (fileName) {
  return winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: fileName })
    ]
  })

}

const API = {
  getLogger
}

module.exports = API
