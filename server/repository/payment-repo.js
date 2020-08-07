const pool = require('../pool');
const { PaymentDTO } = require('../models');

async function findPaymentByUserId(userId) {
  const conn = await pool.getConnection();
  try{
    const [rows] = await conn.query("SELECT * FROM Payment WHERE user_id= ?", [userId]);
    const payment = rows.map((row) => new PaymentDTO(row));
    return payment;
  }catch(e){
    console.log(e);
  } finally {
    conn.release();
  }
}

async function createPayment(data) {
  const conn = await pool.getConnection();
  try {
    const { name, userId } = data;
    await conn.query(
      `INSERT INTO Payment (name, user_id) VALUES (?, ?)`,
      [name, userId]
    );
  } catch (e) {
    console.log(e);
  } finally {
    conn.release();
  }
}

async function removePaymentByName(name) {
  const conn = await pool.getConnection();
  try {
    await conn.query(`DELETE FROM Payment WHERE name = ?`, [name]);
  } catch (e) {
    console.log(e);
  } finally {
    conn.release();
  }
}

module.exports = {
  findPaymentByUserId,
  createPayment,
  removePaymentByName,
};
