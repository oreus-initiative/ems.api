const logger = require('../utils/logger');
const ApiError = require('../utils/apiError');

const hasValidSchema = (schemas) => (req, res, next) => {
  if (!schemas) {
    logger.warning('No schema provided to the schema validation middleware, all requests will be blocked.');
    next(ApiError.internal(req.method));
  }
  let arraySchemas = schemas;
  const errors = {};
  if (!Array.isArray(schemas)) {
    // We want to handle schemas as an array, but
    // support a single schema being passed here.
    arraySchemas = [schemas];
  }

  // eslint-disable-next-line arrow-body-style
  const fn = (schema, index) => {
    // The moment we hit a valid schema, we allow the request.
    return schema.validate(req.body).then(() => next()).catch((err) => {
      // A schema error doesn't mean that the request
      // should be denied right away as there might
      // be other schemas that the request respects.
      errors[index] = err;
    });
  };

  const actions = arraySchemas.map((schema, index) => fn(schema, index));

  Promise.all(actions).then(() => {
    if (Object.keys(errors).length === arraySchemas.length) {
      next(ApiError.badRequest(req.method, 'The provided data doesn\'t respect the expected format.', errors));
    }
  }).catch((err) => {
    next(ApiError.internal(req.method, err));
  });
};

module.exports = hasValidSchema;
