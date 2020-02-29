'use strict';
module.exports = (sequelize, DataTypes) => {
  const GradingSheet = sequelize.define('GradingSheet', {
  }, {});
  GradingSheet.associate = function(models) {
    // associations can be defined here
  };
  return GradingSheet;
};