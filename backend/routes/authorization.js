const express = require('express');
const router = express.Router();
const getAuthorization = require('../controllers/authorization');

router.get('/login', getAuthorization.login);
router.get('/callback', getAuthorization.callback);

module.exports = router;