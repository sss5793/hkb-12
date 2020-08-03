const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user-controller');

const router = express.Router();

// router.post('/', userController.createUser);

// login 접근시, user-service의 local이 실행됩니다.
router.post('/login', passport.authenticate('local'), userController.loginUser);

module.exports = router;
