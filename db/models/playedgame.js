'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlayedGame = sequelize.define('PlayedGame', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    timePlayed: DataTypes.INTEGER
  }, {});
  PlayedGame.associate = function(models) {
    PlayedGame.belongsTo(models.User, {foreignKey: "userId"}),
    PlayedGame.hasMany(models.Game, {foreignKey: "gameId"})
  };
  return PlayedGame;
};