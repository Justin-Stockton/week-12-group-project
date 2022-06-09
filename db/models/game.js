"use strict";
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define(
    "Game",
    {
      name: DataTypes.STRING,
      tags: DataTypes.STRING,
      gameImage: DataTypes.STRING,
      description: DataTypes.TEXT,
      rackId: DataTypes.INTEGER,
    },
    {}
  );
  Game.associate = function (models) {
    Game.hasMany(models.Review, { foreignKey: "gameId" });
    Game.belongsTo(models.Rack, { foreignKey: "rackId" });
  };
  return Game;
};
