'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlayingGame = sequelize.define('PlayingGame', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    timePlayed: DataTypes.INTEGER
  }, {});
  PlayingGame.associate = function(models) {
    // associations can be defined here
  };
  return PlayingGame;
};