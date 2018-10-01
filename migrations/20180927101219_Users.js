
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Users', function (table) {
        table.increments().primary()
        table.string('username')
        table.string('password')
        table.string('email')
        table.integer('coins')
        table.bigInteger('logoutTime')
    })

}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('Users')
};
