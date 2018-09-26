
exports.up = function(knex, Promise) {
    return knex.schema.createTable('CharitiesAndUsers', function (table){
        table.integer('userId')
        table.integer('charityId')
        table.integer('donationPercent')
    })
  
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('CharitiesAndUsers')
};