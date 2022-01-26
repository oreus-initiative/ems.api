import express from "express";

import { initializeLogger } from "./common/logger";
import api from "./routes";

// Setup App
const app = express();
const port = 2022;
app.set('view engine', 'pug');

// Initialize Winston Logger
const logger = initializeLogger();

// Setup API
app.use('/api', api);

// Define Homepage
app.get("/", ( req, res ) => {
    res.render('index', { title: 'Split API', message: 'Welcome to Oreus\'s Split API!'});
});

// Start the Express server
app.listen(port, () => {
    logger.info(`Split API Server Started : http://localhost:${port}.`);
});