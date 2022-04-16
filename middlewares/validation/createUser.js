const JOI = require('joi');

const userSchema = JOI.object({
  displayName: JOI.string().min(8).required(),
  email: JOI.string().email().required(),
  password: JOI.string().length(6).required(),
});

const createValidation = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  const dataUser = { displayName, email, password };

  const { error } = userSchema.validate(dataUser);
  if (error) return res.status(400).json({ message: error.message });

  return next();
};

module.exports = createValidation;