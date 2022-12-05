const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointmentsController');
const loadUser = require('../middleware/loadUser');

router.use([loadUser]);
router.get('/', appointmentsController.getAppointments);
router.post('/', appointmentsController.createAppointment);
router.put('/:id', appointmentsController.updateAppointment);
router.delete('/:id', appointmentsController.deleteAppointment);

module.exports = router;