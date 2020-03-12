'use strict';
module.exports = (sequelize, DataTypes) => {
  const ConsultationSchedule = sequelize.define('ConsultationSchedule', {
    dateTime: DataTypes.DATE,
    room: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  ConsultationSchedule.associate = function(models) {
    // associations can be defined here

    ConsultationSchedule.belongsToMany(models.ResearchProject, { through: 'Appointments', foreignKey: 'ConsultationScheduleId' })

    ConsultationSchedule.belongsTo(models.Faculty, { foreignKey: 'FacultyId' })
  };
  return ConsultationSchedule;
};
