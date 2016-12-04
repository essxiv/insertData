const Code = require('code')
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const describe = lab.describe
const it = lab.it
const expect = Code.expect
const core = require('../lib/core')
const seed = require('../seeds/seed')

describe('Seed Testing', function() {
    it('First Test', function(done) {
        const seedData = {
            id: 1,
            email: 'whynot@gmail.com'
        }
        console.log(seedData)
        done()
    })
})
