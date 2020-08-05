const express = require('express');
const hkbhist = require('./hkbhist');
// const payment = require('./payment');
// const category = require('./category');
const user = require('./user');

const router = express.Router();

router.use('/hkbhist', hkbhist);
// router.use('/payment', payment);
// router.use('/category', category);
router.use('/user', user);

module.exports = router;
