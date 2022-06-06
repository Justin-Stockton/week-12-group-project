'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: DataTypes.STRING,
    tags: DataTypes.STRING,
    gameImage: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Game.associate = function(models) {
    Game.hasMany(models.Ownership, {foreignKey: "gameId"});
    Game.hasMany(models.Review, {foreignKey: "gameId"});
    Game.belongsToMany(models.User, {through:"Ownership", foreignKey: "userId", otherKey: "gameId"});
  };
  return Game;
};