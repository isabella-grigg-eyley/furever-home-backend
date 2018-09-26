
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Charities', function (table){
        table.increments().primary()
        table.string('charityName')
        table.string('mission')
        table.string('websiteURL')
        table.string('logo')
    })
  
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Charities')
};