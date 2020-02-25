'use strict';
module.exports = (sequelize, DataTypes) => {
  const DefenseRating = sequelize.define('DefenseRating', {
    rating: DataTypes.FLOAT
  }, {});
  DefenseRating.associate = function(models) {
    // associations can be defined here
  };
  return DefenseRating;
};