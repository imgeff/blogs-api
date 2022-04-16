const JOI = require('joi');
const categoryService = require('../../services/categoryService');

const postSchema = JOI.object({
  title: JOI.string().required(),
  content: JOI.string().required(),
  categoryIds: JOI.array().required(),
});

const categoryExist = async (categoryIds) => {
  const getCategories = await categoryService.getAll();
  const checkCategoryIds = categoryIds.every((categoryId) => {
    const existSomeCategory = getCategories.content.some((category) => category.id === categoryId);
    return existSomeCategory;
  });
  return checkCategoryIds;
};

const createValidation = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const dataPost = { title, content, categoryIds };

  const { error } = postSchema.validate(dataPost);
  if (error) return res.status(400).json({ message: error.message });

  const checkExistCategories = await categoryExist(categoryIds);
  if (!checkExistCategories) return res.status(400).json({ message: '"categoryIds" not found' });
  
  return next();
};

module.exports = createValidation;