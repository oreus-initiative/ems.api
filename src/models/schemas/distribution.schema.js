const yup = require('yup');

const DISTRIBUTION_NAME_MAX_LENGTH = 256;
const DISTRIBUTION_POOL_SIZE_MAX_LENGTH = 256;
const DISTRIBUTION_TOKEN_MAX_LENGTH = 5;

const schema = yup.object().shape({
  name: yup.string()
    .max(DISTRIBUTION_NAME_MAX_LENGTH)
    .required(),
  pool_size: yup.string()
    .max(DISTRIBUTION_POOL_SIZE_MAX_LENGTH)
    .required(),
  token: yup.string().max(DISTRIBUTION_TOKEN_MAX_LENGTH).required(),
});

module.exports = schema;
module.exports.DISTRIBUTION_NAME_MAX_LENGTH = DISTRIBUTION_NAME_MAX_LENGTH;
module.exports.DISTRIBUTION_POOL_SIZE_MAX_LENGTH = DISTRIBUTION_POOL_SIZE_MAX_LENGTH;
module.exports.DISTRIBUTION_TOKEN_MAX_LENGTH = DISTRIBUTION_TOKEN_MAX_LENGTH;
