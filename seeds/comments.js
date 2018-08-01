
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, content: 'rowValue1'},
        {id: 2, content: 'rowValue1'},
        {id: 3, content: 'rowValue1'},
        {id: 4, content: 'rowValue1'}
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));"
      );
    });
};
