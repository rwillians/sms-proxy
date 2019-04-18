'use strict'

const { env } = require('@mantris/appify')

module.exports = () => ({
  proxy: {
    myPhoneNumber: env.get('MY_PHONE_NUMBER')
  },
  twilio: {
    accountSid: env.get('TWILIO_ACCOUNT_SID'),
    authToken: env.get('TWILIO_AUTH_TOKEN'),
    messagingServiceSid: env.get('TWILIO_MESSAGING_SERVICE_SID')
  }
})
