const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getCosmetics
}

function getCosmetics(testConn) {
    const conn = testConn || connection
    return conn('Cosmetics')
        .select()
}

