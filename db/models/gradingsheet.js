'use strict';
module.exports = (sequelize, DataTypes) => {
  const GradingSheet = sequelize.define('GradingSheet', {
    decision: DataTypes.STRING,
    percentage: DataTypes.INTEGER
  }, {
    timestamp: false
  });
  GradingSheet.associate = function(models) {
    // associations can be defined here
    GradingSheet.belongsToMany(models.Panelist, { through: 'FacultyGradingSheet', foreignKey: 'GradingSheetId' })
  };
  return GradingSheet;
};