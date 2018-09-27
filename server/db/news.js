const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getNews,
}

function getNews(testConn) {
  const conn = testConn || connection
  return conn('News').select()
}