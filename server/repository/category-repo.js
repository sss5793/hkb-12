const pool = require('../pool');
const { CategoryDTO } = require('../models');

async function findCategory() {
  const conn = await pool.getConnection();
  try{
    const [rows] = await conn.query("SELECT * FROM Category");
    const category = rows.map((row) => new CategoryDTO(row));
    return category;
  }catch(e){
    console.log(e);
  } finally {
    conn.release();
  }
}

module.exports = {
  findCategory,
}
