const postService = require('../../services/postService');
const userIsAdmin = require('../../helpers/userIsAdmin');

const destroyValidation = async (req, res, next) => {
  const { userId } = req;
  const { id } = req.params;
  
  const getPost = await postService.getById(id);
  if (getPost.code === 404) return res.status(getPost.code).json(getPost.content);

  const checkUser = await userIsAdmin(userId, id);
  if (!checkUser) return res.status(401).json({ message: 'Unauthorized user' });

  return next();
};

module.exports = destroyValidation;