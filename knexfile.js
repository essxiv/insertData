const config = require('./config')

module.exports = {

    // development environment
    development: {
        client: 'mysql2',
        connection: {
            host: config.dbHost,
            database: config.dbName,
            user: config.dbUser,
            password: config.dbPass
        }
    },
    pool: {
        min: 1,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    },

    // stage environment
    staging: {
        client: 'mysql2',
        connection: {
            host: config.dbHost,
            database: config.dbName,
            user: config.dbUser,
            password: config.dbPass
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    // product environment
    production: {
        client: 'mysql2',
        connection: {
            host: config.dbHost,
            database: config.dbName,
            user: config.dbUser,
            password: config.dbPass
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
}
