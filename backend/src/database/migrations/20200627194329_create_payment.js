exports.up = function(knex) {
  return knex.schema.createTable('payments', function (table) {
      table.increments('id');
      table.string('title').notNullable();
      table.decimal('value').notNullable();
      table.string('date').notNullable();
      table.decimal('external_tax').notNullable();
      table.string('comments').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('payments');
};