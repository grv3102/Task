var router = require('express').Router();

var registerController = require('../controller/register_controller');

router.post('/register', registerController.register);

module.exports = router;