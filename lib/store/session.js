const uuid = require('uuid')
var sessionStore = {}

module.exports.create = function(user) {
    return new Promise(function(resolve, reject) {
        var id = uuid.v4()
        sessionStore[id] = user
        resolve(id)
    })
}

module.exports.findById = function (id) {
    return new Promise(function(resolve, reject) {
        resolve(sessionStore[id])
    })
}

module.exports.destroy = function (id) {
    return new Promise(function (resolve, reject) {
        delete sessionStore[id]
        resolve()
    })
}
