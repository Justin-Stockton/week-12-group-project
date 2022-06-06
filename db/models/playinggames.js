'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlayingGames = sequelize.define('PlayingGames', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    timePlayed: DataTypes.INTEGER
  }, {});
  PlayingGames.associate = function(models) {
    // associations can be defined here
  };
  return PlayingGames;
};