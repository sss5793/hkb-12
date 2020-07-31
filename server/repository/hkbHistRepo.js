const pool = require('../pool');
const { HkbHistDTO } = require('../models');

async function findHkbHistByUserId(userId) {
  const conn = await pool.getConnection();
  const [rows] = await conn.query('SELECT * FROM HkbHist WHERE user_id = ?', [userId]);
  const hkbHist = rows.map((row) => new HkbHistDTO(row));
  return hkbHist;
}

async function createHkbHist(data) {
  const {
    category, content, payment, amount, userId,
  } = data;
  const conn = await pool.getConnection();
  await conn.query('INSERT INTO HkbHist (category, content, payment, amount, user_id) VALUES (?, ?, ?, ?, ?)', [category, content, payment, amount, userId]);
}

async function getLastHkbHist(userId) {
  const conn = await pool.getConnection();
  const [rows] = await conn.query('SELECT * FROM HkbHist WHERE created_at in (SELECT max(created_at) from HkbHist WHERE user_id = ?)', [userId]);
  const hkbHist = rows.map((row) => new HkbHistDTO(row));
  return hkbHist;
}

module.exports = {
  findHkbHistByUserId,
  createHkbHist,
  getLastHkbHist,
};
