const logger = require('../utils/logger');
const ApiError = require('../utils/apiError');

const apiErrorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    logger.error(`[E${err.code}] ${err.message}${err.stack ? `, >>>>> ${err.stack}` : ''}`);
    res.status(err.code).json({
      code: err.code,
      msg: err.message,
    });
  } else {
    logger.error(`[E500] ${err}`);
    res.status(500).json({
      code: 500,
      msg: 'Something went wrong.',
    });
  }
};

module.exports = apiErrorHandler;
