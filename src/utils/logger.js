const pino = require('pino')
const configs = require('../configs')

module.exports = pino({
  name: configs.APP_NAME,
  level: configs.LOG_LEVEL
})
