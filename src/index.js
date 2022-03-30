require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const logger = require('./utils/logger');
const router = require('./routes');
const apiErrorHandler = require('./middlewares/apiError.middleware');
const { testConnection } = require('./models');
const hasValidApiKey = require('./middlewares/hasValidApiKey.middleware');

// Setup App
const app = express();
const port = 2022;
app.set('view engine', 'pug');
app.use(bodyParser.json());

// Setup CORS
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Setup API Routes
app.use('/api/v1', cors(corsOptions), hasValidApiKey, router);

// Catches and handle errors (should be last 'use').
app.use(apiErrorHandler);

// Define Homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Split API', message: 'Welcome to Oreus\'s Split API!' });
});

// Start the Express server
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, (server) => {
    logger.info(`Split API '${process.env.NODE_ENV}' server started : http://localhost:${port}.`);

    // Setup DB, close service if fails to connect.
    if (!testConnection()) {
      server.close();
    }
  });
}
