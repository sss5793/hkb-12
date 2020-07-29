const pool = require('../pool');
const { HkbHistDTO } = require('../models');

async function findHkbHistByUserId(userId) {
  const conn = await pool.getConnection();
  try{
    const [rows] = await conn.query(`SELECT * FROM HkbHist WHERE user_id = ?`, [userId]);
    const hkbHist = rows.map((row) => new HkbHistDTO(row));
    console.log(rows, hkbHist);
    return hkbHist;
  }catch(e){
    console.log(e);
  }
}

module.exports = {
  findHkbHistByUserId,
};
