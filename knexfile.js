const config = require('./src/configs/database.configs')[process.env.NODE_ENV];
require('dotenv').config();

module.exports = config;
