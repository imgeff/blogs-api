const postService = require('../services/postService');

const create = async (req, res) => {
  const { userId } = req;
  const { title, content: contentPost, categoryIds } = req.body;
  const { code, content } = await postService.create({ title, contentPost, categoryIds, userId });

  return res.status(code).json(content);
};

module.exports = {
  create,
};