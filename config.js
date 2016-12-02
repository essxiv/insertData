const convict = require('convict')

const config = convict({
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
        doc: 'Database Host',
        format: String,
        default: 'insertDB',
        env: 'DB_NAME',
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
        default: 'dbUser',
        env: 'DB_USER'
    },
    dbPass: {
        doc: 'Database Password',
        format: String,
        default: 'password',
        env: 'DB_PASS'
    }
})

config.validate()
module.exports = config.get()
