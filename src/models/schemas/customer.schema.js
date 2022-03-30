const yup = require('yup');

const CUSTOMER_FIRSTNAME_MAX_LENGTH = 256;
const CUSTOMER_LASTNAME_MAX_LENGTH = 256;
const CUSTOMER_USERNAME_MAX_LENGTH = 256;
const CUSTOMER_AVATAR_URL_MAX_LENGTH = 1000;

const schema = yup.object().shape({
  user_id: yup.string()
    .uuid()
    .required(),
  firstname: yup.string()
    .max(CUSTOMER_FIRSTNAME_MAX_LENGTH)
    .required(),
  lastname: yup.string()
    .max(CUSTOMER_LASTNAME_MAX_LENGTH)
    .required(),
  username: yup.string()
    .max(CUSTOMER_USERNAME_MAX_LENGTH),
  avatar_url: yup.string()
    .max(CUSTOMER_AVATAR_URL_MAX_LENGTH),
});

module.exports = schema;
module.exports.CUSTOMER_FIRSTNAME_MAX_LENGTH = CUSTOMER_FIRSTNAME_MAX_LENGTH;
module.exports.CUSTOMER_LASTNAME_MAX_LENGTH = CUSTOMER_LASTNAME_MAX_LENGTH;
module.exports.CUSTOMER_USERNAME_MAX_LENGTH = CUSTOMER_USERNAME_MAX_LENGTH;
module.exports.CUSTOMER_AVATAR_URL_MAX_LENGTH = CUSTOMER_AVATAR_URL_MAX_LENGTH;
