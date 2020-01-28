const router = require('express').Router();

router.use('/api', require('./api'));
router.use('/webhook', require('./webhooks'));

module.exports = router;
