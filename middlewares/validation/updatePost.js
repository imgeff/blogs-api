const JOI = require('joi');
const userIsAdmin = require('../../helpers/userIsAdmin');

const postSchema = JOI.object({
  title: JOI.string().required(),
  content: JOI.string().required(),
});

const updateValidation = async (req, res, next) => {
  const { userId } = req;
  const { id } = req.params;
  const { title, content, categoryIds } = req.body;
  const dataPost = { title, content };

  const { error } = postSchema.validate(dataPost);
  if (error) return res.status(400).json({ message: error.message });

  if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });
  
  const checkUser = await userIsAdmin(userId, id);
  if (!checkUser) return res.status(401).json({ message: 'Unauthorized user' });
  
  return next();
};

module.exports = updateValidation;