
exports.up = function(knex) {
  return knex.schema.createTable('journeys', function(table){
      table.increments();
      table.string('start_point').notNullable();
      table.string('ending_point').notNullable();
      table.string('date').notNullable();
      table.string('time').notNullable();
      table.decimal('value').notNullable();
      table.decimal('sits').notNullable();
      table.string('user_id').notNullable();

      table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('journeys');
};
