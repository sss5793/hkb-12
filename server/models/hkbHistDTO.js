class HkbHistDTO {
  constructor({
    id, category, content, payment, amount, userId, user_id,
  }) {
    this.id = id;
    this.category = category;
    this.content = content;
    this.payment = payment;
    this.amount = amount;
    this.userId = user_id || userId;
  }
}

module.exports = HkbHistDTO;
