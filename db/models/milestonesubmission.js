'use strict';
module.exports = (sequelize, DataTypes) => {
  const MilestoneSubmission = sequelize.define('MilestoneSubmission', {
    status: DataTypes.STRING,
    dateAdded: DataTypes.DATE,
    dateCompleted: DataTypes.DATE
  }, {
    timestamp: false
  });
  MilestoneSubmission.associate = function(models) {
    // associations can be defined here
  };
  return MilestoneSubmission;
};