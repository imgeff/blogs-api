module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  { timestamps: false });

  categories.associate = (model) => {
    categories.hasMany(model.PostsCategories, { foreignKey: 'id', as: 'postsCategory' });
  };

  return categories;
};