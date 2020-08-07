const express = require('express');
const { ensureAuthenticated } = require('../middleware');
const paymentController = require('../controllers/payment-controller');

const router = express.Router();

router.get('/', ensureAuthenticated, paymentController.findPaymentByUserId);
router.post('/', ensureAuthenticated, paymentController.createPayment);
router.delete('/', ensureAuthenticated, paymentController.removePaymentByName);

module.exports = router;
