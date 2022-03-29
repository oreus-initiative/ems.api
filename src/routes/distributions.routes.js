const express = require('express');

const {
  add,
  update,
  del,
  get,
  getAll,
  execute,
} = require('../controllers/distributions.controller');

const router = express.Router();

router.post('/', add);
router.put('/:id', update);
router.delete('/:id', del);
router.get('/:id', get);
router.get('/', getAll);
router.get('/:id', execute);

module.exports = router;
