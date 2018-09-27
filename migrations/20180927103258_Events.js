
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Events', function (table){
        table.increments().primary()
        table.string('organisation')
        table.string('headline')
        table.string('content')
        table.string('photo')
        table.string('dateAndTime')
        table.string('location')
    })
  
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Events')
};