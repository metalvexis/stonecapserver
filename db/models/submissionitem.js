'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubmissionItem = sequelize.define('SubmissionItem', {
    semester: DataTypes.STRING,
    schoolYear: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  SubmissionItem.associate = function(models) {
    // associations can be defined here
  };
  return SubmissionItem;
};