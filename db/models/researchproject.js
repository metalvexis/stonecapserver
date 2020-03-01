'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResearchProject = sequelize.define('ResearchProject', {
    title: DataTypes.TEXT,
    abstract: DataTypes.TEXT,
    status: DataTypes.STRING,
    published: DataTypes.BOOLEAN,
    tags: DataTypes.STRING
  }, {});
  ResearchProject.associate = function(models) {
    // associations can be defined here
    ResearchProject.belongsToMany(models.Student, { through: 'Proponents', foreignKey: 'ResearchProjectId' })
    ResearchProject.belongsToMany(models.MilestoneChecklist, { through: 'MilestoneSubmissions', foreignKey: 'ResearchProjectId' })
    ResearchProject.belongsToMany(models.Criteria, { through: 'GradingSheets', foreignKey: 'ResearchProjectId' })

    ResearchProject.belongsToMany(models.Faculty, { through: 'Adviser', foreignKey: 'ResearchProjectId' })
    ResearchProject.belongsToMany(models.Faculty, { through: 'Panelist', foreignKey: 'ResearchProjectId' })

    ResearchProject.hasMany(models.DefenseSchedule)
    ResearchProject.hasMany(models.Appointment)
  };
  return ResearchProject;
};