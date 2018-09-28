const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    //getStore,
    sayHi
}
function sayHi(){
    return "hi"
}


