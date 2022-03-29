const express = require('express');

const analytics = require('./analytics/index');
const customers = require('./customers.routes');
const customerGroups = require('./customer_groups.routes');
const distributions = require('./distributions.routes');

const router = express.Router();

router.use('/analytics', analytics);
router.use('/customers', customers);
router.use('/customer_groups', customerGroups);
router.use('/distributions', distributions);

module.exports = router;
