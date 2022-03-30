const yup = require('yup');

const CUSTOMER_FIRSTNAME_MAX_LENGTH = 256;
const CUSTOMER_LASTNAME_MAX_LENGTH = 256;
const CUSTOMER_USERNAME_MAX_LENGTH = 256;
const CUSTOMER_AVATAR_URL_MAX_LENGTH = 1000;

const updateSchema = yup.object().shape({
  firstname: yup.string()
    .max(CUSTOMER_FIRSTNAME_MAX_LENGTH)
    .optional()
    .nullable(),
  lastname: yup.string()
    .max(CUSTOMER_LASTNAME_MAX_LENGTH)
    .optional()
    .nullable(),
  username: yup.string()
    .max(CUSTOMER_USERNAME_MAX_LENGTH)
    .optional()
    .nullable(),
  avatar_url: yup.string()
    .max(CUSTOMER_AVATAR_URL_MAX_LENGTH)
    .optional()
    .nullable(),
}).noUnknown(true).strict();

const createSchemaSingle = yup.object().shape({
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
}).noUnknown(true).strict();

const createSchemaMultiple = yup.array().of(createSchemaSingle);

module.exports.createSchemaSingle = createSchemaSingle;
module.exports.createSchemaMultiple = createSchemaMultiple;
module.exports.updateSchema = updateSchema;
module.exports.CUSTOMER_FIRSTNAME_MAX_LENGTH = CUSTOMER_FIRSTNAME_MAX_LENGTH;
module.exports.CUSTOMER_LASTNAME_MAX_LENGTH = CUSTOMER_LASTNAME_MAX_LENGTH;
module.exports.CUSTOMER_USERNAME_MAX_LENGTH = CUSTOMER_USERNAME_MAX_LENGTH;
module.exports.CUSTOMER_AVATAR_URL_MAX_LENGTH = CUSTOMER_AVATAR_URL_MAX_LENGTH;
