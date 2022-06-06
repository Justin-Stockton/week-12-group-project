'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: DataTypes.STRING,
    tags: DataTypes.STRING,
    gameImage: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
};