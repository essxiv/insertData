const config = require('./config')
const store = require('./lib/store')
const server = require('./server')(config, store)

server.start(function(err) {
    if(err) {
        throw err
    }
    console.log('Server @: ', server.info.uri)
})
