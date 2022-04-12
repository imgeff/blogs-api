const JOI = require('joi');
const { getByEmail } = require('../services/user');

const userSchema = JOI.object({
  displayName: JOI.string().min(8).required(),
  email: JOI.string().email().required(),
  password: JOI.string().min(6).max(6).required(),
});

const userValidation = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const dataUser = { displayName, email, password, image };
  const userExist = await getByEmail(email);

  if (userExist !== null) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const { error } = userSchema.validate(dataUser);
  if (error) return res.status(400).json({ message: error.message });

  return next();
};

module.exports = userValidation;