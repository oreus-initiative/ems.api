const express = require('express');
const hasValidSchema = require('../middlewares/hasValidSchema.middleware');
const { createSchemaSingle, createSchemaMultiple, updateSchema } = require('../models/schemas/customer.schema');

const {
  create,
  update,
  del,
  read,
  readAll,
} = require('../controllers/customers.controller');

const router = express.Router();

router.post('/', hasValidSchema([createSchemaSingle, createSchemaMultiple]), create);
router.put('/:id', hasValidSchema(updateSchema), update);
router.delete('/:id', del);
router.get('/:id', read);
router.get('/', readAll);

module.exports = router;
