class PaymentDTO {
  constructor({ name, userId, user_id }) {
    this.name = name;
    this.userId = userId || user_id;
  }
}

module.exports = PaymentDTO;
