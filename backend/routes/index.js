const express = require('express');
const router = express.Router();

router.use('/authorization', require('./authorization'));
router.use('/appointments', require('./appointmentsRoutes'));
router.use('/ailments', require('./ailmentsRoutes'));
router.use('/doctors', require('./doctorsRoutes'));

module.exports = router;