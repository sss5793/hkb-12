const pool = require('../pool');
const { HkbHistDTO } = require('../models');

async function findHkbHistByUserId(userId) {
  const conn = await pool.getConnection();
  try{
    const [rows] = await conn.query("\
    SELECT HkbHist.category, HkbHist.content, HkbHist.payment, HkbHist.amount, HkbHist.created_at, HkbHist.user_id, Category.type AS type\
    FROM HkbHist\
    JOIN Category ON HkbHist.category = Category.name\
    WHERE user_id = ?"
    , [userId]);
    const hkbHist = rows.map((row) => new HkbHistDTO(row));
    return hkbHist;
  }catch(e){
    console.log(e);
  } finally {
    conn.release();
  }
}

async function createHkbHist(data) {
  const conn = await pool.getConnection();
  try{
    const { category, payment, amount, created_at, content, userId } = data;
    await conn.query(
      `INSERT INTO HkbHist (category,payment,amount,created_at,content,user_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [category, payment, amount, created_at, content, userId]);
  }catch(e){
    console.log(e);
  } finally {
    conn.release();
  }
}
module.exports = {
  findHkbHistByUserId,
  createHkbHist,
};
