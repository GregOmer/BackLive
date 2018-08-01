
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lectures').del()
    .then(function () {
      // Inserts seed entries
      return knex('lectures').insert([
        {id: 1, streamId: 'rowValue1', chatId: 'socketIO'},
        {id: 2, streamId: 'rowValue1', chatId: 'socketIO'},
        {id: 3, streamId: 'rowValue1', chatId: 'socketIO'}
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('lectures_id_seq', (SELECT MAX(id) FROM lectures));"
      );
    });
};
