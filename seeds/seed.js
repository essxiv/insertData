
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('seeds').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('seeds').insert({ id: 1, colName: 'rowValue1' }),
        knex('seeds').insert({ id: 2, colName: 'rowValue2' }),
        knex('seeds').insert( { id: 3, colName: 'rowValue3' })
      ])
    })
}
