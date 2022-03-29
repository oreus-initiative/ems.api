require('dotenv').config();
const db = require('knex')(require('../configs/database.configs')[process.env.NODE_ENV]);
const logger = require('../utils/logger');

const testConnection = async () => {
  logger.info('Testing Database Connection...');
  try {
    await db.raw('SELECT 1');
    logger.info('Connection has been established successfully.');
    return true;
  } catch (e) {
    logger.error('Unable to connect to the database:', e);
    return false;
  }
};

module.exports = db;
module.exports.testConnection = testConnection;
