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

module.exports = {
  findPaymentByUserId,
}
