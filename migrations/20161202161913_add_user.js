
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.uuid('id').primary().notNullable()
        table.string('email').unique().notNullable()
        table.string('encryptedPassword').notNullable()
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
}
