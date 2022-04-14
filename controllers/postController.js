const postService = require('../services/postService');

const create = async (req, res) => {
  const { name } = req.body;
  const { code, content } = await postService.create({ name });
  return res.status(code).json(content);
};

module.exports = {
  create,
};