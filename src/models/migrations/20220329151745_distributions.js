const { DISTRIBUTION_NAME_MAX_LENGTH, DISTRIBUTION_POOL_SIZE_MAX_LENGTH, DISTRIBUTION_TOKEN_MAX_LENGTH } = require('../schemas/distribution.schema');

/**
 * The 'distribution' table keeps track of all distributions made.
 * A distribution is made when an admin decides to distribute a pool
 * of retributions to the users.
 */
const up = async (knex) => knex.schema.createTable('distribution', (table) => {
  table.uuid('id')
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'));
  table.string('name', DISTRIBUTION_NAME_MAX_LENGTH);
  table.string('pool_size', DISTRIBUTION_POOL_SIZE_MAX_LENGTH)
    .notNullable();
  table.string('token', DISTRIBUTION_TOKEN_MAX_LENGTH)
    .notNullable();
  table.timestamp('created_at')
    .notNullable()
    .defaultTo(knex.fn.now());
  table.timestamp('deleted_at');
});

const down = async (knex) => knex.schema.dropTable('distribution');

module.exports = {
  up,
  down,
};
