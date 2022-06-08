'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ownership = sequelize.define('Ownership', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {});
  Ownership.associate = function(models) {
    Ownership.belongsTo(models.User, {foreignKey: "userId"});
    Ownership.belongsTo(models.Game, {foreignKey: "gameId"});
  };
  return Ownership;
};