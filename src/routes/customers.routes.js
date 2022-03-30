const express = require('express');

const {
  create,
  update,
  del,
  read,
  readAll,
} = require('../controllers/customers.controller');

const router = express.Router();

router.post('/', create);
router.put('/:id', update);
router.delete('/:id', del);
router.get('/:id', read);
router.get('/', readAll);

module.exports = router;
