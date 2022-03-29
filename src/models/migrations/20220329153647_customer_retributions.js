/**
 * The 'customer_retribution' table keeps track of all customers retributions.
 * This enables analytics on the share of customer through time.
 */
const up = async (knex) => knex.schema.createTable('customer_retribution', (table) => {
  table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
  table.uuid('customer_id').notNullable().references('id').inTable('customer')
    .onDelete('CASCADE')
    .index();
  table.string('amount', 256).notNullable();
  table.string('token', 5).notNullable();
  table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  table.timestamp('deleted_at');
});

const down = async (knex) => knex.schema.dropTable('customer_retribution');

module.exports = {
  up,
  down,
};
