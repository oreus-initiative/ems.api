const express = require('express');

const {
  create,
  update,
  del,
  read,
  readAll,
  execute,
} = require('../controllers/distributions.controller');

const router = express.Router();

router.post('/', create);
router.put('/:id', update);
router.delete('/:id', del);
router.get('/:id', read);
router.get('/', readAll);
router.get('/:id', execute);

module.exports = router;
