const express = require('express');
const passport = require('passport');
// const userController = require('../controllers/user-controller');

const router = express.Router();

// router.post('/', userController.createUser);

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/',
  failureFlash: true,
}),
(req, res) => {
  res.redirect('/success');
});

module.exports = router;
