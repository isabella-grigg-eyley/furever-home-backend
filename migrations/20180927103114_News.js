
exports.up = function (knex, Promise) {
    return knex.schema.createTable('News', function (table) {
        table.increments().primary()
        table.string('organisation')
        table.string('headline')
        table.text('content', 50000)
        table.string('image')
    })

}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('News')
};