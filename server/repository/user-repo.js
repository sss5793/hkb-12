const pool = require('../pool');
const { UserDTO } = require('../models');

async function authenticateUser(id, pw) {
  const conn = await pool.getConnection();
  const [rows] = await conn.query('SELECT * FROM User WHERE user_id = ? AND password = ?', [id, pw]);
  const user = rows.map((row) => new UserDTO(row));

  return user;
}

module.exports = {
  authenticateUser,
}