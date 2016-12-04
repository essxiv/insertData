const convict = require('convict')

const conf = convict({
    host: {
        doc: 'Server Host',
        format: String,
        default: 'localhost',
        env: 'HOST'
    },
    port: {
        doc: 'Port',
        format: Number,
        default: 8000,
        env: 'PORT'
    },
    dbName: {
        doc: 'Database Name',
        format: String,
        default: 'insert_db',
        env: 'DB_NAME',
    },
    dbHost: {
        doc: 'Database Host',
        format: String,
        default: '127.0.0.1',
        env: 'DB_HOST'
    },
    dbPort: {
        doc: 'Database Port',
        format: Number,
        default: '3306',
        env: 'DB_PORT'
    },
    dbUser: {
        doc: 'Database User',
        format: String,
        default: 'insertUser',
        env: 'DB_USER'
    },
    dbPass: {
        doc: 'Database Password',
        format: String,
        default: 'P4ssw0rd!',
        env: 'DB_PASS'
    }
})

conf.validate()
module.exports = conf.get()
