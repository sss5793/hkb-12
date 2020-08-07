const PaymentRepo = require('../repository/payment-repo');

async function findPaymentByUserId(userId) {
  const paymentList = await PaymentRepo.findPaymentByUserId(userId);
  return paymentList;
}

async function createPayment(data) {
  await PaymentRepo.createPayment(data);
  return;
}

async function removePaymentByName(name) {
  await PaymentRepo.removePaymentByName(name);
  return;
}

module.exports = {
  findPaymentByUserId,
  createPayment,
  removePaymentByName,
};
