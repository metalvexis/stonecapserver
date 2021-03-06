'use strict';
module.exports = (sequelize, DataTypes) => {
  const ConsultationSchedule = sequelize.define('ConsultationSchedule', {
    dateTime: DataTypes.DATE,
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