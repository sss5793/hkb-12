const PaymentRepo = require('../repository/payment-repo');

async function findPaymentByUserId(userId) {
  const paymentList = await PaymentRepo.findPaymentByUserId(userId);
  return paymentList;
}

module.exports = {
  findPaymentByUserId,
};
