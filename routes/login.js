var router = require('express').Router();

var authController = require('../controller/login_controller');
//Login
router.post('/login', authController.auth);

module.exports = router;