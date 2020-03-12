'use strict';
module.exports = (sequelize, DataTypes) => {
  const MilestoneSubmission = sequelize.define('MilestoneSubmission', {
    dateSubmitted: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  MilestoneSubmission.associate = function(models) {
    // associations can be defined here
  };
  return MilestoneSubmission;
};