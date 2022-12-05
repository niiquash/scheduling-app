const express = require('express');
const router = express.Router();
const ailmentsController = require('../controllers/ailmentsController');
const loadUser = require('../middleware/loadUser');

router.use([loadUser]);
router.get('/', ailmentsController.getAilments);
router.post('/', ailmentsController.createAilment);
router.patch('/:id', ailmentsController.updateAilment);
router.delete('/:id', ailmentsController.deleteAilment);

module.exports = router;
