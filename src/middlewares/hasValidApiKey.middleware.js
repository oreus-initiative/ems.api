const logger = require('../utils/logger');
const ApiError = require('../utils/apiError');

const hasValidApiKey = (req, res, next) => {
  if (req.headers.authorization
    && req.headers.authorization.localeCompare(`Bearer ${process.env.API_KEY}`) === 0
  ) {
    next();
  } else {
    logger.info(`An authorized request from '${req.socket.remoteAddress}' has been blocked.`);
    next(ApiError.unauthorized(req.method, 'No API Key provided.'));
  }
};

module.exports = hasValidApiKey;
