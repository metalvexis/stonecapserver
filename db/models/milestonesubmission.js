'use strict';
module.exports = (sequelize, DataTypes) => {
  const MilestoneSubmission = sequelize.define('MilestoneSubmission', {
    status: DataTypes.STRING,
    dateCompleted: DataTypes.DATE
  }, {
    timestamp: false
  });
  MilestoneSubmission.associate = function(models) {
    // associations can be defined here
  };
  return MilestoneSubmission;
};