'use strict'

const { env } = require('@mantris/appify')
const apiFactory = require('./api.js')
const configFactory = require('./config.js')

module.exports = () => {
  const environment = env.current
  const config = configFactory(environment)

  return (...args) => {
    return apiFactory({ config, environment })
      .then((handler) => { handler(...args) })
  }
}
