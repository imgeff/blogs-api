const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  algorithm: 'HS256',
};

const secret = process.env.SECRET;

const generateToken = (req, res) => {
  const { id, code } = req.user;
  const token = jwt.sign(id, secret, jwtConfig);

  return res.status(code).json({ token });
};

module.exports = generateToken;