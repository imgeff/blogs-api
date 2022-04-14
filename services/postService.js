const model = require('../models');

const create = async ({ title, content, categoryIds, userId }) => {
  const newPost = { title, content, userId };
  const { dataValues: { id } } = await model.BlogPost.create(newPost);
  newPost.id = id;

  const createPostsCategories = [];
  categoryIds.forEach((categoryId) => {
    const createPostCategory = model.PostsCategories.create({ postId: id, categoryId });
    createPostsCategories.push(createPostCategory);
  });

  await Promise.all(createPostsCategories);

  return { code: 201, content: newPost };
};

module.exports = {
  create,
};