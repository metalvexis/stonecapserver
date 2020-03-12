'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    concern: DataTypes.TEXT,
    prerequisite: DataTypes.TEXT,
    feedback: DataTypes.TEXT
  }, {});
  Appointment.associate = function(models) {
    // associations can be defined here
  };
  return Appointment;
};