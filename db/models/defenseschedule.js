'use strict';
module.exports = (sequelize, DataTypes) => {
  const DefenseSchedule = sequelize.define('DefenseSchedule', {
    dateTime: DataTypes.DATE,
    semester: DataTypes.STRING,
    schoolYear: DataTypes.STRING,
    venue: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  DefenseSchedule.associate = function(models) {
    // associations can be defined here
  };
  return DefenseSchedule;
};