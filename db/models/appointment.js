'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    feedback: DataTypes.STRING,
    concern: DataTypes.STRING,
    prerequisites: DataTypes.STRING
  }, {
    timestamp: false
  });
  Appointment.associate = function(models) {
    // associations can be defined here
  };
  return Appointment;
};