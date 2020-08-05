const { CategoryDTO } = require('../models');
const CategoryService = require('../services/category-service');

async function findCategory(req, res) {
  try {
    const categoryList = await CategoryService.findCategory();
    res.status(200).json({ success: true, payload: categoryList });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
}

module.exports = {
  findCategory,
};
