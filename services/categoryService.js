const model = require('../models');

const create = async (category) => {
  const { dataValues } = await model.Category.create(category);
  return { code: 201, content: dataValues };
};

module.exports = {
  create,
};