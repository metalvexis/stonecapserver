'use strict';
module.exports = (sequelize, DataTypes) => {
  const MilestoneSubmission = sequelize.define('MilestoneSubmission', {
    semester: DataTypes.STRING,
    schoolYear: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  MilestoneSubmission.associate = function(models) {
    // associations can be defined here
  };
  return MilestoneSubmission;
};