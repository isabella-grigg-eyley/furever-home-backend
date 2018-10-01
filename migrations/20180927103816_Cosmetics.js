
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Cosmetics', function (table) {
        table.increments().primary()
        table.string('name')
        table.text('image', 5000)
        table.integer('price')
    })

}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('Cosmetics')
};