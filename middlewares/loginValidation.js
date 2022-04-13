const JOI = require('joi');

const loginSchema = JOI.object({
  email: JOI.string().email().required(),
  password: JOI.string().length(6).required(),
});

const loginValidation = async (req, res, next) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });
  if (error) return res.status(400).json({ message: error.message });

  return next();
};

module.exports = loginValidation;