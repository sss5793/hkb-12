const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user-controller');

const router = express.Router();

// router.post('/', userController.createUser);

router.post('/login', passport.authenticate('local'), userController.loginUser);

module.exports = router;
