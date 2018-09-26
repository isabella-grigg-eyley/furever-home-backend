
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Animals', function (table){
        table.increments().primary()
        table.string('name')
        table.string('species')
        table.string('disposition')
    })
  
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Animals')
};