const express = require('express');

const {
  add,
  update,
  del,
  get,
  getAll,
} = require('../../controllers/analytics/customer_group_retributions.controller');

const router = express.Router();

router.post('/', add);
router.put('/:id', update);
router.delete('/:id', del);
router.get('/:id', get);
router.get('/', getAll);

module.exports = router;
