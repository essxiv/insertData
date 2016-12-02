const Hapi = require('hapi')
const swagger = require('hapi-swagger')

module.exports = function (config, store) {
    const server = new Hapi.server()
    const swagger = {
        register: swagger,
        options: {
            info: {
                title: 'Insert Data Documentation',
                version: require('./package').version
            },
            tags: [{
                name: 'session',
                description: 'user sessions'
            }]
        }
    }

    server.connection({
        host: config.host,
        port: config.port
    })

    var validate = function(decoded, request, callback) {
        store.session.get(decoded.id)
            .then(function(user) {
                if(user) {
                    callback(null, true)
                } else {
                    callback(null, false)
                }
            })

    }

    server.register([
        require('hapi-auth-jwt2'),
        require('inert'),
        require('vision'),
        require('blipp'),
        swagger
    ], function(err) {
        if(err) {
            console.log(err)
        }

        server.auth.strategy('jwt', 'jwt', {
            key: config.jwtSecret,
            validateFunc: validate,
            verifyOptions: { algorithms: [ config.jwtAlgorithm ]}
        })

        server.auth.default('jwt')

        server.route([
        ])
    })
}
