
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Events', function (table) {
        table.increments().primary()
        table.string('organisation')
        table.string('headline')
        table.text('content', 50000)
        table.text('image', 5000)
        table.timestamp('dateAndTime')
        table.string('location')
    })

}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('Events')
};