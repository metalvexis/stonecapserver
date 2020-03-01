'use strict';
module.exports = (sequelize, DataTypes) => {
  const FacultyGradingSheet = sequelize.define('FacultyGradingSheet', {
    rating: DataTypes.DECIMAL(2,2)
  }, {});
  FacultyGradingSheet.associate = function(models) {
    // associations can be defined here
  };
  return FacultyGradingSheet;
};