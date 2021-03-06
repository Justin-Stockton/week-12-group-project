"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    User.belongsToMany(models.Game, {
      through: "PlayingGames",
      foreignKey: "userId",
      otherKey: "gameId",
    });
    User.hasMany(models.Review, { foreignKey: "userId" });

    User.hasMany(models.Rack, { foreignKey: "userId" });
  };
  return User;
};
