const express = require('express');
const hbkhist = require('./hkbhist');
// const payment = require('./payment');
// const category = require('./category');
// const user = require('./user');

const router = express.Router();

router.use('/hbkhist', hbkhist);
// router.use('/payment', payment);
// router.use('/category', category);
// router.use('/user', user);

module.exports = router;
