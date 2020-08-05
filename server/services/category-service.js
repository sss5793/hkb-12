const CategoryRepo = require('../repository/category-repo');

async function findCategory(userId) {
  const categoryList = await CategoryRepo.findCategory(userId);
  return categoryList;
}

module.exports = {
  findCategory,
};
