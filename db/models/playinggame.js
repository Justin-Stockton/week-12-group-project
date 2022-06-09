"use strict";
module.exports = (sequelize, DataTypes) => {
  const PlayingGame = sequelize.define(
    "PlayingGame",
    {
      userId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
      rackId: DataTypes.INTEGER,
    },
    {}
  );
  PlayingGame.associate = function (models) {
    PlayingGame.belongsTo(models.User, { foreignKey: "userId" });
    PlayingGame.belongsTo(models.Game, { foreignKey: "gameId" });
    PlayingGame.belongsTo(models.Rack, { foreignKey: "gameId" });
  };
  return PlayingGame;
};
