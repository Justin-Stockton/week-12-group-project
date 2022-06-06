'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ownership = sequelize.define('Ownership', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {});
  Ownership.associate = function(models) {
    // associations can be defined here
  };
  return Ownership;
};