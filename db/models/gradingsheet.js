'use strict';
module.exports = (sequelize, DataTypes) => {
  const GradingSheet = sequelize.define('GradingSheet', {
    schoolYear: DataTypes.STRING,
    semester: DataTypes.STRING
  }, {});
  GradingSheet.associate = function(models) {
    // associations can be defined here
  };
  return GradingSheet;
};