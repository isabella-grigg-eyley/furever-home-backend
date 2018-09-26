
exports.up = function(knex, Promise) {
    return knex.schema.createTable('CosmeticsAndAnimals', function (table){
        table.integer('animalId')
        table.integer('cosmeticId')
    })
  
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('CosmeticsAndAnimals')
};