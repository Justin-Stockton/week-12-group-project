'use strict';
module.exports = (sequelize, DataTypes) => {
  const Password = sequelize.define('Password', {
    password: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Password.associate = function(models) {
    // associations can be defined here
  };
  return Password;
};