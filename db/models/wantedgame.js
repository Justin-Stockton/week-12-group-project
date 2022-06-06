'use strict';
module.exports = (sequelize, DataTypes) => {
  const WantedGame = sequelize.define('WantedGame', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    wantScale: DataTypes.INTEGER
  }, {});
  WantedGame.associate = function(models) {
    // associations can be defined here
  };
  return WantedGame;
};