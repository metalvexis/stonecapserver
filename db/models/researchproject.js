'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResearchProject = sequelize.define('ResearchProject', {
    title: DataTypes.TEXT,
    abstract: DataTypes.TEXT,
    status: DataTypes.STRING,
    approval: DataTypes.BOOLEAN,
    publication: DataTypes.BOOLEAN
  }, {});
  ResearchProject.associate = function(models) {
    // associations can be defined here
    ResearchProject.belongsToMany(models.Faculty, { through: 'Advisers', foreignKey: 'ResearchProjectId', as: 'ProjectAdvisers' })

    ResearchProject.belongsToMany(models.Faculty, { through: 'Panelists', foreignKey: 'ResearchProjectId', as: 'ProjectPanelists' })

    ResearchProject.belongsToMany(models.Student, { through: 'Proponents', foreignKey: 'ResearchProjectId' })

    ResearchProject.belongsToMany(models.ConsultationSchedule, { through: 'Appointments', foreignKey: 'ResearchProjectId' })

    ResearchProject.belongsToMany(models.MilestoneChecklist, { through: 'MilestoneSubmissions', foreignKey: 'ResearchProjectId' })

    ResearchProject.belongsToMany(models.DefenseType, { through: 'DefenseSchedules', foreignKey: 'ResearchProjectId' })

    ResearchProject.belongsTo(models.Dean, { foreignKey: 'DeanId' })
  };
  return ResearchProject;
};
