const yup = require('yup');

const CUSTOMER_GROUP_NAME_MAX_LENGTH = 256;

const schema = yup.object().shape({
  name: yup.string()
    .max(CUSTOMER_GROUP_NAME_MAX_LENGTH)
    .required(),
  description: yup.string(),
  sharing: yup.object()
    .required(),
});

module.exports = schema;
module.exports.CUSTOMER_GROUP_NAME_MAX_LENGTH = CUSTOMER_GROUP_NAME_MAX_LENGTH;
