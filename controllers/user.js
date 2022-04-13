const user = require('../services/user');

const register = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const dataUser = { displayName, email, password, image };
  
    const userId = await user.register(dataUser);
    req.user = { id: userId, code: 201 };
    return next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  register,
};