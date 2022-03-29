/**
 * The 'customer_group_retribution' table keeps track of all customer groups retributions.
 * This enables analytics on the share of customer groups through time.
 */
const up = async (knex) => knex.schema.createTable('customer_group_retribution', (table) => {
  table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
  table.uuid('customer_group_id').notNullable().references('id').inTable('customer_group')
    .onDelete('CASCADE')
    .index();
  table.string('amount', 256).notNullable();
  table.string('token', 5).notNullable();
  table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  table.timestamp('deleted_at');
});

const down = async (knex) => knex.schema.dropTable('customer_group_retribution');

module.exports = {
  up,
  down,
};
