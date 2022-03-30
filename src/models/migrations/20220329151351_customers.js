const { CUSTOMER_FIRSTNAME_MAX_LENGTH, CUSTOMER_LASTNAME_MAX_LENGTH, CUSTOMER_USERNAME_MAX_LENGTH, CUSTOMER_AVATAR_URL_MAX_LENGTH } = require('../schemas/customer.schema');

/**
 * The 'customer' table contains the customers of the service that will
 * be receiving retributions.
 */
const up = async (knex) => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  return knex.schema.createTable('customer', (table) => {
    table.uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('user_id')
      .unique()
      .notNullable();
    table.string('firstname', CUSTOMER_FIRSTNAME_MAX_LENGTH)
      .notNullable();
    table.string('lastname', CUSTOMER_LASTNAME_MAX_LENGTH)
      .notNullable();
    table.string('username', CUSTOMER_USERNAME_MAX_LENGTH);
    table.string('avatar_url', CUSTOMER_AVATAR_URL_MAX_LENGTH);
    table.timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now());
    table.timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.fn.now());
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
