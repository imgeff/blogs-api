const model = require('../models');

const create = async (category) => {
  const { dataValues } = await model.Categories.create(category);
  return { code: 201, content: dataValues };
};

const getAll = async () => {
  const allCategories = await model.Categories.findAll({ raw: true });
  return { code: 200, content: allCategories };
};

module.exports = {
  create,
  getAll,
};