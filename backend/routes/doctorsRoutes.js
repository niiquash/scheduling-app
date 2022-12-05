express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctorsController');

router.get('/', doctorsController.getDoctors);
router.post('/', doctorsController.createDoctor);
router.patch('/:id', doctorsController.updateDoctor);
router.get('/:id', doctorsController.deleteDoctor);

module.exports = router;
