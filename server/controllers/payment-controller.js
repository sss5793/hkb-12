const PaymentService = require('../services/payment-service');

async function findPaymentByUserId(req, res) {
  try {
    const paymentList = await PaymentService.findPaymentByUserId(req.user.userId);
    res.status(200).json({ success: true, payload: paymentList });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
}

async function createPayment(req, res) {
  try {
    const data = { name: req.body.name, userId: req.user.userId };
    await PaymentService.createPayment(data);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
}

async function removePaymentByName(req, res) {
  try {
    await PaymentService.removePaymentByName(req.query.name);
    res.status(200).json({ success: true, payload: null });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
}

module.exports = {
  findPaymentByUserId,
  createPayment,
  removePaymentByName,
};
