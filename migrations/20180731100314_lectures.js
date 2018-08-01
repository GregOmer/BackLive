
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lectures', function (table){
    table.increments()
    table.text('streamId')
    table.text('chatId')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lectures')
};
