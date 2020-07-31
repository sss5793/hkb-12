const hkbHistRepo = require('../repository/hkbHistRepo');

async function findHkbHistByUserId(userId) {
  const hkbHist = await hkbHistRepo.findHkbHistByUserId(userId);
  return hkbHist;
}

async function createHkbHist(data) {
  const { userId } = data;
  await hkbHistRepo.createHkbHist(data);
  const hkbHist = await hkbHistRepo.getLastHkbHist(userId);
  return hkbHist;
}

module.exports = {
  findHkbHistByUserId,
  createHkbHist,
};
