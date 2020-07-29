const hkbHistRepo = require('../repository/hkbHistRepo');

async function findHkbHistByUserId(userId) {
  const hkbHist = await hkbHistRepo.findHkbHistByUserId(userId);
  return hkbHist;
}

module.exports = {
  findHkbHistByUserId,
}