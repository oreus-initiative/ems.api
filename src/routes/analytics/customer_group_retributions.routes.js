const express = require('express');

const {
  create,
  update,
  del,
  read,
  readAll,
} = require('../../controllers/analytics/customer_group_retributions.controller');

const router = express.Router();

router.post('/', create);
router.put('/:id', update);
router.delete('/:id', del);
router.get('/:id', read);
router.get('/', readAll);

module.exports = router;
