const hkbHistRepo = require('../repository/hkbhist-repo');

async function findHkbHistByUserId(userId) {
  const hkbHist = await hkbHistRepo.findHkbHistByUserId(userId);
  return hkbHist;
}

async function createHkbHist(data) {
  const hkbHist = await hkbHistRepo.createHkbHist(data);
  return hkbHist;
}


module.exports = {
  findHkbHistByUserId,
  createHkbHist,
};
