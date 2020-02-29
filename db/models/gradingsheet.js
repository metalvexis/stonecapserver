'use strict';
module.exports = (sequelize, DataTypes) => {
  const GradingSheet = sequelize.define('GradingSheet', {
    feedback: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    timestamp: false
  });
  GradingSheet.associate = function(models) {
    // associations can be defined here
  };
  return GradingSheet;
};