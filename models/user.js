module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING },
  },
  { timestamps: false });

  user.associate = (model) => {
    user.hasMany(model.BlogPosts, { foreignKey: 'id', as: 'postsUser' });
  };

  return user;
};