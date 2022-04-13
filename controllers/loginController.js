const userService = require('../services/userService');

const login = async (req, res, next) => {
  const { email } = req.body;
  const findUser = await userService.getByEmail(email);
  if (!findUser) return res.status(400).json({ message: 'Invalid fields' });

  req.user = { id: findUser.id, code: 200 };
  return next();
};

module.exports = login;