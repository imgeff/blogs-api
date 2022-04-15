module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    published: { type: DataTypes.NOW, allowNull: false },
    updated: { type: DataTypes.NOW, allowNull: false },
  },
  { timestamps: true, createdAt: 'published', updatedAt: 'updated' });

  blogPost.associate = (model) => {
    blogPost.belongsTo(model.Users, { foreignKey: 'userId', as: 'user' });
  };

  return blogPost;
};