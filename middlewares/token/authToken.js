const jwt = require('jsonwebtoken');

const jwtConfig = {
  algorithm: 'HS256',
};

const secret = process.env.SECRET || 'BlogsAPI*';

const authToken = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const decoded = jwt.verify(token, secret, jwtConfig);
    req.userId = decoded.id;

    return next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authToken;