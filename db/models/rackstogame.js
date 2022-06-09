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
    RacksToGame.belongsToMany(models.Rack, {
      through: "RacksToGame",
      foreignKey: "rackId",
      otherKey: "gameId",
    });
    RacksToGame.belongsToMany(models.Game, {
      through: "RacksToGame",
      foreignKey: "gameId",
      otherKey: "rackId",
    });
  };
  return RacksToGame;
};
