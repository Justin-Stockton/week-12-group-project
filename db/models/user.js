'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Game, {through:"Ownership", foreignKey: "userId", otherKey: "gameId"});
    User.hasMany(models.Review, { foreignKey: "userId"});
    User.hasOne(models.PlayingGame, { foreignKey: "userId" });
    User.hasMany(models.Ownership, {foreignKey: "userId"});
    User.hasMany(models.Rack, {foreignKey: "userId"});
  };
  return User;
};
