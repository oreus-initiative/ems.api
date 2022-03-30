const { CUSTOMER_GROUP_RETRIBUTION_AMOUNT_MAX_LENGTH, CUSTOMER_GROUP_RETRIBUTION_TOKEN_MAX_LENGTH } = require('../schemas/customer_group_retribution.schema');

/**
 * The 'customer_group_retribution' table keeps track of all customer groups retributions.
 * This enables analytics on the share of customer groups through time.
 */
const up = async (knex) => knex.schema.createTable('customer_group_retribution', (table) => {
  table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
  table.uuid('customer_group_id').notNullable().references('id').inTable('customer_group')
    .onDelete('CASCADE')
    .index();
  table.string('amount', CUSTOMER_GROUP_RETRIBUTION_AMOUNT_MAX_LENGTH).notNullable();
  table.string('token', CUSTOMER_GROUP_RETRIBUTION_TOKEN_MAX_LENGTH).notNullable();
  table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  table.timestamp('deleted_at');
});

const down = async (knex) => knex.schema.dropTable('customer_group_retribution');

module.exports = {
  up,
  down,
};
