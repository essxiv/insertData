const config = require('../../config')

const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: config.dbHost,
        port: config.dbPort,
        database: config.dbName,
        user: config.dbUser,
        password: config.dbPass
    }
})

module.exports = knex
