const express = require('express');

const customerRetributions = require('./customer_retributions.routes');
const customerGroupRetributions = require('./customer_group_retributions.routes');

const router = express.Router();

router.use('/customer_retributions', customerRetributions);
router.use('/customer_group_retributions', customerGroupRetributions);

module.exports = router;
