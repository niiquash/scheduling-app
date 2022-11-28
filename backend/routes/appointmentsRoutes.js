const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointmentsController');
const loadUser = require('../middleware/loadUser');

router.use([loadUser]);
router.get('/', appointmentsController.getAppointments);
router.post('/', appointmentsController.createAppointment);
router.patch('/', appointmentsController.updateAppointment);
router.delete('/', appointmentsController.deleteAppointment);

module.exports = router;