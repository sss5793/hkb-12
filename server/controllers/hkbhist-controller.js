const { HkbHistDTO } = require('../models');
const HkbHistService = require('../services/hkbhist-service');

async function findHkbHistByUserId(req, res) {
  try {
    const hkbHist = await HkbHistService.findHkbHistByUserId(req.user.userId);
    res.status(200).json({ success: true, payload: hkbHist });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
}

async function createHkbHist(req, res) {
  try {
    // req.body
    const data = { ...req.body, userId: req.user.userId };
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
    await HkbHistService.updateHkbHistById(req.query.id, req.body);
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
