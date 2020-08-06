const pool = require('../pool');
const { UserDTO } = require('../models');

async function findUserById(id) {
  const conn = await pool.getConnection();
  const [rows] = await conn.query('SELECT * FROM User WHERE user_id = ?', [id]);
  const user = rows.length !== 0 ? new UserDTO(rows[0]) : null;

  return user;
}

async function createUser(data) {
  const conn = await pool.getConnection();
  try {
    const { userId, name } = data;
    await conn.query(`INSERT INTO User (user_id, name) VALUES (?, ?)`, [userId, name]);
  } catch (e) {
    console.log(e);
  } finally {
    conn.release();
  }
}

module.exports = {
  findUserById,
  createUser,
};
