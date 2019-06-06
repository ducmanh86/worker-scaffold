const getenv = require('getenv')
const packages = require('../../package.json')

require("dotenv").config()

const getVersion = () => {
  const packageVersion = packages.version
  const lastDotIndex = packageVersion.lastIndexOf('.')
  const version = packageVersion.slice(0, lastDotIndex)
  return `${version}.${getenv('BUILD_NUMBER')}`
}

// const debug = getenv('NODE_ENV') === 'development'
const debug = false

module.exports = {
  VERSION: getVersion(),
  APP_NAME: packages.name,
  NODE_ENV: getenv('NODE_ENV'),
  DEBUG: debug,
  LOG_LEVEL: getenv('LOG_LEVEL'),
}
