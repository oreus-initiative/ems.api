require('dotenv').config();
const { join } = require('path');
const logger = require('../utils/logger');

const modelsDir = join(__dirname, '..', 'models');

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    log: {
      warn(msg) {
        logger.warn(msg);
      },
      error(msg) {
        logger.error(msg);
      },
      deprecate(msg) {
        logger.warn(msg);
      },
      debug(msg) {
        logger.debug(msg);
      },
    },
    migrations: {
      directory: `${modelsDir}/migrations`,
    },
    seeds: {
      directory: `${modelsDir}/seeders`,
    },
  },
  production: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    log: {
      warn(msg) {
        logger.warn(msg);
      },
      error(msg) {
        logger.error(msg);
      },
      deprecate(msg) {
        logger.warn(msg);
      },
      debug(msg) {
        logger.debug(msg);
      },
    },
    migrations: {
      directory: `${modelsDir}/migrations`,
    },
    seeds: {
      directory: `${modelsDir}/seeders`,
    },
  },
  test: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    log: {
      warn(msg) {
        logger.warn(msg);
      },
      error(msg) {
        logger.error(msg);
      },
      deprecate(msg) {
        logger.warn(msg);
      },
      debug(msg) {
        logger.debug(msg);
      },
    },
    migrations: {
      directory: `${modelsDir}/migrations`,
    },
    seeds: {
      directory: `${modelsDir}/seeders`,
    },
  },
};
