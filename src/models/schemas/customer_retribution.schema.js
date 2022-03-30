const yup = require('yup');

const CUSTOMER_RETRIBUTION_AMOUNT_MAX_LENGTH = 256;
const CUSTOMER_RETRIBUTION_TOKEN_MAX_LENGTH = 5;

const schema = yup.object().shape({
  customer_id: yup.string()
    .uuid()
    .required(),
  amount: yup.string()
    .max(CUSTOMER_RETRIBUTION_AMOUNT_MAX_LENGTH)
    .required(),
  token: yup.string()
    .max(CUSTOMER_RETRIBUTION_TOKEN_MAX_LENGTH)
    .required(),
});

module.exports = schema;
module.exports.CUSTOMER_RETRIBUTION_AMOUNT_MAX_LENGTH = CUSTOMER_RETRIBUTION_AMOUNT_MAX_LENGTH;
module.exports.CUSTOMER_RETRIBUTION_TOKEN_MAX_LENGTH = CUSTOMER_RETRIBUTION_TOKEN_MAX_LENGTH;
