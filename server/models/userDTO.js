class UserDTO {
  constructor({
    userId, user_id, name, password,
  }) {
    this.name = name;
    this.userId = userId || user_id;
    this.password = password;
  }
}

module.exports = UserDTO;
