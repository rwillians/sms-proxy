'use strict'

class ProxyService {
  /**
   * @param {import('./Twilio')} twilio
   * @param {Object} config
   * @param {String} config.myPhoneNumber
   */
  constructor (twilio, { myPhoneNumber }) {
    this.__twilio = twilio
    this.__myPhoneNumber = myPhoneNumber
  }

  /**
   * @param {Object} payload
   * @param {String} payload.message
   * @returns {Promise<VideoFacingModeEnum>}
   */
  async processInbountMessage ({ message }) {
    await this.__twilio.send({ to: this.__myPhoneNumber, message })
  }
}

module.exports = ProxyService
