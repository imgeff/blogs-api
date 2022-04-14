const model = require('../models');

const create = async (category) => {
  const { dataValues } = await model.Categories.create(category);
  return { code: 201, content: dataValues };
};

module.exports = {
  create,
};