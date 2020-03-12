'use strict';
module.exports = (sequelize, DataTypes) => {
  const GradingSheet = sequelize.define('GradingSheet', {
    CriteriaId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    ResearchProjectId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    rating: DataTypes.NUMERIC(2, 2),
    decision: DataTypes.TEXT
  }, {});
  GradingSheet.associate = function(models) {
    // associations can be defined here
  };
  return GradingSheet;
};
