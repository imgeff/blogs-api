const jwt = require('jsonwebtoken');

const jwtConfig = {
  algorithm: 'HS256',
};

const secret = process.env.SECRET || 'BlogsAPI*';

const generateToken = (req, res) => {
  const { id, code } = req.user;
  const payload = { id };
  const token = jwt.sign(payload, secret, jwtConfig);

  return res.status(code).json({ token });
};

module.exports = generateToken;