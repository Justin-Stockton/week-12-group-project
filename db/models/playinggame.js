"use strict";
module.exports = (sequelize, DataTypes) => {
  const PlayingGame = sequelize.define(
    "PlayingGame",
    {
      userId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
    },
    {}
  );
  PlayingGame.associate = function (models) {
    PlayingGame.belongsTo(models.User, { foreignKey: "userId" });
    PlayingGame.belongsTo(models.Game, { foreignKey: "gameId" });
  };
  return PlayingGame;
};
