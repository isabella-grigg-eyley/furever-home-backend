const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCharities,
}

function getCharities(testConn) {
  const conn = testConn || connection
  return conn('Charities').select()
}
