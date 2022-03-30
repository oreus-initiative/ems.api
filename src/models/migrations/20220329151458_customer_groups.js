const { CUSTOMER_GROUP_NAME_MAX_LENGTH } = require('../schemas/customer_group.schema');

/**
 * The 'customer_group' table contains the different customers groups
 * of the service allowing different ways of sharing their retributions.
 */
const up = async (knex) => knex.schema.createTable('customer_group', (table) => {
  table.uuid('id')
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'));
  table.string('name', CUSTOMER_GROUP_NAME_MAX_LENGTH)
    .notNullable();
  table.text('description');
  table.json('sharing')
    .notNullable();
  table.timestamp('created_at')
    .notNullable()
    .defaultTo(knex.fn.now());
  table.timestamp('updated_at')
    .notNullable()
    .defaultTo(knex.fn.now());
  table.timestamp('deleted_at');
});

const down = async (knex) => knex.schema.dropTable('customer_group');

module.exports = {
  up,
  down,
};
