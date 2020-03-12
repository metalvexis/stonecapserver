'use strict';
module.exports = (sequelize, DataTypes) => {
  const MilestoneSubmission = sequelize.define('MilestoneSubmission', {
    ResearchProjectId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    MilestoneChecklistId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    dateSubmitted: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  MilestoneSubmission.associate = function(models) {
    // associations can be defined here
  };
  return MilestoneSubmission;
};
