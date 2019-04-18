'use strict'

const appify = require('@mantris/appify')
const routes = require('./routes.js')

const Proxy = require('./services/Proxy.js')
const Twilio = require('./services/Twilio.js')

module.exports = appify(async ({ config, router }) => {
  const services = {}

  services.twilio = new Twilio(config.twilio)
  services.proxy = new Proxy(services.twilio, config.proxy)

  router.post('/inbound-messages', routes.inboundMessages.create(services))
})
