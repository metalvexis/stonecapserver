'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    concern: DataTypes.STRING,
    prerequisites: DataTypes.STRING,
    schoolYear: DataTypes.STRING,
    semester: DataTypes.STRING
  }, {});
  Appointment.associate = function(models) {
    // associations can be defined here
  };
  return Appointment;
};