'use strict';
module.exports = (sequelize, DataTypes) => {
  const ConsultationSchedule = sequelize.define('ConsultationSchedule', {
    date: DataTypes.DATE,
    startTime: DataTypes.INTEGER, // 0 - 23
    endTime: DataTypes.INTEGER, // 0 - 23
    room: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    timestamps: false
  });
  ConsultationSchedule.associate = function(models) {
    // associations can be defined here
    ConsultationSchedule.hasOne(models.Appointment)
  };
  return ConsultationSchedule;
};