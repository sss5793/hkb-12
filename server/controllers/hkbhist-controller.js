const { HkbHistDTO } = require('../models');
const HkbHistService = require('../services/hkbhist-service');

async function findHkbHistByUserId(req, res) {
  try {
    const userId = 'admin';
    const hkbHist = await HkbHistService.findHkbHistByUserId(userId);
    res.status(200).json({ success: true, payload: hkbHist });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
}

async function createHkbHist(req, res) {
  try {
    // req.body
    const userId = 'admin';
    const data = { ...req.body, userId };
    await HkbHistService.createHkbHist(data);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
}

async function updateHkbHistById(req, res) {
  try {
    // req.query
    // req.body
    res.status(200).json({ success: true, payload: null });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
}

async function removeHkbHistById(req, res) {
  try {
    // req.query
    // console.log(req.query);
    await HkbHistService.removeHkbHistById(req.query.id);
    res.status(200).json({ success: true, payload: null });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
}

module.exports = {
  findHkbHistByUserId,
  createHkbHist,
  updateHkbHistById,
  removeHkbHistById,
};
