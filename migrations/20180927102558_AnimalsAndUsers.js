
exports.up = function(knex, Promise) {
    return knex.schema.createTable('AnimalsAndUsers', function (table){
        table.increments().primary()
        table.integer('animalId')
        table.integer('userId')
    })
  
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('AnimalsAndUsers')
};