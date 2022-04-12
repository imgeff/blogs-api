const user = require('../services/user');

const register = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const dataUser = { displayName, email, password, image };
  
    await user.register(dataUser);
    const token = '';
  
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  register,
};