const model = require('../models');

const register = async (dataUser) => {
  const { dataValues: { id } } = await model.Users.create(dataUser);
  return id;
};

const getAll = async () => {
  const users = await model.Users.findAll({ raw: true });
  return users;
};

const getByEmail = async (email) => {
  const user = await model.Users.findOne({ where: { email }, raw: true });
  return user;
};

module.exports = {
  register,
  getByEmail,
  getAll,
};