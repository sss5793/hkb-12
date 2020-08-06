const hkbHistRepo = require('../repository/hkbhist-repo');

async function findHkbHistByUserId(userId) {
  const hkbHist = await hkbHistRepo.findHkbHistByUserId(userId);
  return hkbHist;
}

async function createHkbHist(data) {
  const hkbHist = await hkbHistRepo.createHkbHist(data);
  return hkbHist;
}

async function updateHkbHistById(data) {
  const hkbHist = await hkbHistRepo.updateHkbHistById(data);
  return hkbHist;
}

async function removeHkbHistById(id) {
  const hkbHist = await hkbHistRepo.removeHkbHistById(id);
  return hkbHist;
}

module.exports = {
  findHkbHistByUserId,
  createHkbHist,
  updateHkbHistById,
  removeHkbHistById,
};
