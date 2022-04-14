const userService = require('../services/userService');

const register = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const dataUser = { displayName, email, password, image };

    const userExist = await userService.getByEmail(email);
    if (userExist) return res.status(409).json({ message: 'User already registered' });
  
    const userId = await userService.register(dataUser);
    req.user = { id: userId, code: 201 };
    return next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

module.exports = {
  register,
  getAll,
};