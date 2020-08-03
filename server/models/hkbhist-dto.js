class HkbHistDTO {
  constructor({
    id,
    category,
    content,
    payment,
    amount,
    userId,
    user_id,
    createdAt,
    created_at,
  }) {
    this.id = id;
    this.category = category;
    this.content = content;
    this.payment = payment;
    this.amount = amount;
    this.createdAt = created_at || createdAt;
    this.userId = user_id || userId;
  }
}

module.exports = HkbHistDTO;
