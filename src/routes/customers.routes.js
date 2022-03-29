const express = require('express');

const {
  add,
  update,
  del,
  get,
  getAll,
} = require('../controllers/customers.controller');

const router = express.Router();

router.post('/', add);
router.put('/:id', update);
router.delete('/:id', del);
router.get('/:id', get);
router.get('/', getAll);

module.exports = router;
