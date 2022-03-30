const logger = require('../utils/logger');
const ApiError = require('../utils/apiError');

const hasValidSchema = (schema) => (req, res, next) => {
  if (!schema) {
    logger.warning('No schema provided to the schema validation middleware, all requests will be blocked.');
    next(ApiError.internal());
  } else {
    schema.validate(req.data)
      .then(() => {
        // If the schema's validation resolves, the
        // data respects the expected format.
        next();
      })
      .catch((err) => {
        next(ApiError.badRequest('The provided data doesn\'t respect the expected format.', err));
      });
  }
};

module.exports = hasValidSchema;
