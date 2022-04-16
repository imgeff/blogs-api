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

  return { code: 200, content: allPosts };
};

const getById = async (id) => {
  const post = await model.BlogPosts.findOne({
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
    where: { id },
  });
  
  if (!post) return { code: 404, content: { message: 'Post does not exist' } };
  return { code: 200, content: post };
};

const update = async (newData, postId) => {
  await model.BlogPosts.update(newData, { where: { id: postId } });
  const { content: { title, content, userId, categories } } = await getById(postId);
  const postUpdated = { title, content, userId, categories };
  return { code: 200, content: postUpdated };
};

// update({ title: 'test2', content: 'testContente2' }, 2).then((data) => console.log(data.content));

module.exports = {
  create,
  getAll,
  getById,
  update,
};