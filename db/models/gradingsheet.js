'use strict';
module.exports = (sequelize, DataTypes) => {
  const GradingSheet = sequelize.define('GradingSheet', {
    CriteriaId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    PanelistId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    rating: DataTypes.NUMERIC(2, 2),
    decision: DataTypes.TEXT
  }, {});
  GradingSheet.associate = function(models) {
    // associations can be defined here
    GradingSheet.belongsTo(models.Panelist)
    GradingSheet.belongsTo(models.Criteria)
  };
  return GradingSheet;
};
