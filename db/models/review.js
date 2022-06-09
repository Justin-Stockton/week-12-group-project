"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      review: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Game, { foreignKey: "gameId" });
  };
  return Review;
};
