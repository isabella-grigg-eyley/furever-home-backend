
exports.up = function(knex, Promise) {
    return knex.schema.createTable('CosmeticsAndUsers', function (table){
        table.increments().primary()
        table.integer('userId')
        table.integer('cosmeticId')
    })
  
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('CosmeticsAndUsers')
};