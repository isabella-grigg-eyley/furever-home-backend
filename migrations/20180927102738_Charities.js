
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Charities', function (table) {
        table.increments().primary()
        table.string('charityName')
        table.text('mission', 5000)
        table.text('websiteURL', 5000)
        table.string('logo')
    })

}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('Charities')
};