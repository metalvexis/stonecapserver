'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    ResearchProjectId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    ConsultationScheduleId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    concern: DataTypes.TEXT,
    prerequisite: DataTypes.TEXT,
    feedback: DataTypes.TEXT
  }, {});
  Appointment.associate = function(models) {
    // associations can be defined here
  };
  return Appointment;
};
