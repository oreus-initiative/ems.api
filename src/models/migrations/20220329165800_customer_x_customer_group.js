/**
 * The 'customer_x_customer_group' table that allows us to
 * add users to different groups.
 */
const up = async (knex) => knex.schema.createTable('customer_x_customer_group', (table) => {
  table.uuid('group_id').notNullable().references('id').inTable('customer_group')
    .onDelete('CASCADE')
    .index();
  table.uuid('customer_id').notNullable().references('id').inTable('customer')
    .onDelete('CASCADE')
    .index();
});

const down = async (knex) => knex.schema.dropTable('customer_x_customer_group');

module.exports = {
  up,
  down,
};
