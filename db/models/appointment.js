'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    feedback: DataTypes.STRING,
    concern: DataTypes.STRING,
    prerequisite: DataTypes.STRING
  }, {
    timestamps: false
  });
  Appointment.associate = function(models) {
    // associations can be defined here
  };
  return Appointment;
};