'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlayedGame = sequelize.define('PlayedGame', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    timePlayed: DataTypes.INTEGER
  }, {});
  PlayedGame.associate = function(models) {
    // associations can be defined here
  };
  return PlayedGame;
};