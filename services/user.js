const model = require('../models');

const register = async (dataUser) => {
  await model.Users.create(dataUser);
};

const getByEmail = async (email) => {
  const user = await model.Users.findOne({ where: { email }, raw: true });
  return user;
};

module.exports = {
  register,
  getByEmail,
};