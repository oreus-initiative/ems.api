const { CUSTOMER_RETRIBUTION_AMOUNT_MAX_LENGTH, CUSTOMER_RETRIBUTION_TOKEN_MAX_LENGTH } = require('../schemas/customer_retribution.schema');

/**
 * The 'customer_retribution' table keeps track of all customers retributions.
 * This enables analytics on the share of customer through time.
 */
const up = async (knex) => knex.schema.createTable('customer_retribution', (table) => {
  table.uuid('id')
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'));
  table.uuid('customer_id')
    .notNullable()
    .references('id')
    .inTable('customer')
    .onDelete('CASCADE')
    .index();
  table.string('amount', CUSTOMER_RETRIBUTION_AMOUNT_MAX_LENGTH)
    .notNullable();
  table.string('token', CUSTOMER_RETRIBUTION_TOKEN_MAX_LENGTH)
    .notNullable();
  table.timestamp('created_at')
    .notNullable()
    .defaultTo(knex.fn.now());
  table.timestamp('updated_at')
    .notNullable()
    .defaultTo(knex.fn.now());
  table.timestamp('deleted_at');
});

const down = async (knex) => knex.schema.dropTable('customer_retribution');

module.exports = {
  up,
  down,
};
