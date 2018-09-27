
exports.up = function(knex, Promise) {
    return knex.schema.createTable('News', function (table){
        table.increments().primary()
        table.string('organisation')
        table.string('headline')
        table.string('content')
        table.string('image')
    })
  
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('News')
};