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

module.exports = {
  create,
};