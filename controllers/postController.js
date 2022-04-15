const postService = require('../services/postService');

const create = async (req, res) => {
  const { userId } = req;
  const { title, content: contentPost, categoryIds } = req.body;
  const { code, content } = await postService.create({ title, contentPost, categoryIds, userId });

  return res.status(code).json(content);
};

const getAll = async (_req, res) => {
  const { code, content } = await postService.getAll();
  return res.status(code).json(content);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { code, content } = await postService.getById(id);
  return res.status(code).json(content);
};

module.exports = {
  create,
  getAll,
  getById,
};