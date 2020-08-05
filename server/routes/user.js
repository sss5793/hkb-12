const express = require('express');
const passport = require('passport');
const userController = require('../controllers/user-controller');

const router = express.Router();

// login 접근시, user-service의 local이 실행됩니다.
router.post('/login', passport.authenticate('local'), userController.localLogin);
// login 접근시, user-service의 githubLogin이 실행됩니다.
router.get('/login', passport.authenticate('github'));

router.get('/login/callback', passport.authenticate('github', {
  failureRedirect: '/',
}), userController.githubLogin);

module.exports = router;
