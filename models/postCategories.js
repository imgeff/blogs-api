module.exports = (sequelize, _DataTypes) => {
  const postCategories = sequelize.define('PostsCategories', {},
  { timestamps: false });

  postCategories.associate = (model) => {
    model.BlogPosts.belongsToMany(model.Categories, { 
      as: 'categories', 
      through: postCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
     });

     model.Categories.belongsToMany(model.BlogPosts, {
      as: 'posts',
      through: postCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
     });
  };

  return postCategories;
};