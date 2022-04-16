const postService = require('../services/postService');

const userIsAdmin = async (userId, postId) => {
  const { content: { dataValues } } = await postService.getById(postId);
  const checkUser = dataValues.userId === userId;
  return checkUser;
};

module.exports = userIsAdmin;