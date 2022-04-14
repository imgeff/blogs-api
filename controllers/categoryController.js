const postService = require('../services/categoryService');

const create = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  
  const { code, content } = await postService.create({ name });
  return res.status(code).json(content);
};

module.exports = {
  create,
};