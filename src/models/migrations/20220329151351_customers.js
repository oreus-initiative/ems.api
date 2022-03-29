/**
 * The 'customer' table contains the customers of the service that will
 * be receiving retributions.
 */
const up = async (knex) => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  return knex.schema.createTable('customer', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('user_id').notNullable();
    table.string('firstname', 256).notNullable();
    table.string('lastname', 256).notNullable();
    table.string('username', 256).notNullable().unique();
    table.string('avatar_url', 1000);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('deleted_at');
  });
};

const down = async (knex) => {
  knex.raw('drop extension if exists "uuid-ossp"');

  return knex.schema.dropTable('customer');
};

module.exports = {
  up,
  down,
};
