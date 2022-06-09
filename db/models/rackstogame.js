"use strict";
module.exports = (sequelize, DataTypes) => {
  const RacksToGame = sequelize.define(
    "RacksToGame",
    {
      gameId: DataTypes.INTEGER,
      rackId: DataTypes.INTEGER,
    },
    {}
  );
  RacksToGame.associate = function (models) {
    RacksToGame.belongsToMany(models.Game, { foreignKey: "gameId" });
    RacksToGame.belongsToMany(models.Rack, { foreignKey: "rackId" });
  };
  return RacksToGame;
};
