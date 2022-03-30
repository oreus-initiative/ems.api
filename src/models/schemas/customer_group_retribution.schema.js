/* eslint-disable max-len */
const yup = require('yup');

const CUSTOMER_GROUP_RETRIBUTION_AMOUNT_MAX_LENGTH = 256;
const CUSTOMER_GROUP_RETRIBUTION_TOKEN_MAX_LENGTH = 5;

const schema = yup.object().shape({
  customer_group_id: yup.string()
    .uuid()
    .required(),
  amount: yup.string()
    .max(CUSTOMER_GROUP_RETRIBUTION_AMOUNT_MAX_LENGTH)
    .required(),
  token: yup.string()
    .max(CUSTOMER_GROUP_RETRIBUTION_TOKEN_MAX_LENGTH)
    .required(),
});

module.exports = schema;
module.exports.CUSTOMER_GROUP_RETRIBUTION_AMOUNT_MAX_LENGTH = CUSTOMER_GROUP_RETRIBUTION_AMOUNT_MAX_LENGTH;
module.exports.CUSTOMER_GROUP_RETRIBUTION_TOKEN_MAX_LENGTH = CUSTOMER_GROUP_RETRIBUTION_TOKEN_MAX_LENGTH;
