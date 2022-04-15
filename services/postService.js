const model = require('../models');

const create = async ({ title, contentPost, categoryIds, userId }) => {
  const newPost = { title, content: contentPost, userId };
  const { dataValues: { id } } = await model.BlogPosts.create(newPost);
  newPost.id = id;

  const createPostsCategories = [];
  categoryIds.forEach((categoryId) => {
    const createPostCategory = model.PostsCategories.create({ postId: id, categoryId });
    createPostsCategories.push(createPostCategory);
  });

  await Promise.all(createPostsCategories);

  return { code: 201, content: newPost };
};

const getAll = async () => {
const allPosts = await model.BlogPosts.findAll({
  include: [
    { 
      model: model.Users, 
      as: 'user', 
      attributes: { exclude: ['password'] },
    }, 
    { 
      model: model.Categories, 
      as: 'categories', 
      through: { attributes: [] },
    },
  ],
});

  return allPosts;
};

module.exports = {
  create,
  getAll,
};