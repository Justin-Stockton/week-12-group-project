"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rack = sequelize.define(
    "Rack",
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Rack.associate = function (models) {
    Rack.belongsTo(models.User, { foreignKey: "userId" });
    // Rack.hasMany(models.Game, { foreignKey: "rackId" });
  };
  return Rack;
};
