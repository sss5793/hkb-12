class UserDTO {
  constructor({
    userId, user_id, name,
  }) {
    this.name = name;
    this.userId = userId || user_id;
  }
}

module.exports = UserDTO;
