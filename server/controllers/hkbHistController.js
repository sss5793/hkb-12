const { HkbHistDTO } = require('../models');
const HkbHistService = require('../services/hkbHistService');

const userId = 'admin';

async function findHkbHistByUserId(req, res) {
  try {
    const hkbHist = await HkbHistService.findHkbHistByUserId(userId);
    res.status(200).json({ success: true, payload: hkbHist });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
}

async function createHkbHist(req, res) {
  try {
    req.body.userId = userId;
    const data = new HkbHistDTO(req.body);
    const hkbHist = await HkbHistService.createHkbHist(data);
    res.status(200).json({ success: true, payload: hkbHist });
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
