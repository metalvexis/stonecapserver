'use strict';
module.exports = (sequelize, DataTypes) => {
  const ConsultationSchedule = sequelize.define('ConsultationSchedule', {
    dateTime: DataTypes.DATE,
    room: DataTypes.STRING,
    schoolYear: DataTypes.STRING,
    semester: DataTypes.STRING
  }, {});
  ConsultationSchedule.associate = function(models) {
    // associations can be defined here
  };
  return ConsultationSchedule;
};