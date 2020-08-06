const { PaymentDTO } = require('../models');
const PaymentService = require('../services/payment-service');

async function findPaymentByUserId(req, res) {
  try {
    const userId = 'admin';
    const paymentList = await PaymentService.findPaymentByUserId(userId);
    res.status(200).json({ success: true, payload: paymentList });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
}

module.exports = {
  findPaymentByUserId,
};
