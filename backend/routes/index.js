const express = require('express');
const router = express.Router();

router.use('/appointments', require('./appointmentsRoutes'))
router.use('/authorization', require('./authorization'))

module.exports = router;