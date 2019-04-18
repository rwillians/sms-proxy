'use strict'

const twilio = require('twilio')

class TwilioService {
  /**
   * @param {Object} config
   * @param {String} config.accountSid
   * @param {String} config.authToken
   * @param {String} config.messagingServiceSid
   */
  constructor ({ accountSid, authToken, messagingServiceSid }) {
    this.__client = twilio(accountSid, authToken)
    this.__messagingServiceSid = messagingServiceSid
  }

  /**
   * @param {Object} options
   * @param {String} options.to
   * @param {String} options.message
   * @returns {Promise<void>}
   */
  async send ({ to, message }) {
    await this.__client.messages.create({
      to,
      body: message,
      messagingServiceSid: this.__messagingServiceSid
    })
  }
}

module.exports = TwilioService
