'use strict'

const rescue = require('express-rescue')

module.exports = ({ proxy }) => ([
  rescue(async (req, res) => {
    await proxy.processInbountMessage({
      message: req.body.Body
    })

    res
      .status(204)
      .end()
  })
])
