const hkbHistRepo = require('../repository/hkbhist-repo');

async function findHkbHistByUserId(userId) {
  const hkbHist = await hkbHistRepo.findHkbHistByUserId(userId);
  return hkbHist;
}

module.exports = {
  findHkbHistByUserId,
};
