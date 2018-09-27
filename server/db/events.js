const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getEvents,
}

function getEvents(testConn) {
  const conn = testConn || connection
  return conn('Events').select()
}
