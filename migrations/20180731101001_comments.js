
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function (table){
    table.increments()
    table.text('content')
    table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
