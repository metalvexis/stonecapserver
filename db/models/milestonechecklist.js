'use strict';
module.exports = (sequelize, DataTypes) => {
  const MilestoneChecklist = sequelize.define('MilestoneChecklist', {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    category: DataTypes.STRING
  }, {});
  MilestoneChecklist.associate = function(models) {
    // associations can be defined here
    MilestoneChecklist.belongsToMany(models.ResearchProject, { through: 'MilestoneSubmissions', foreignKey: 'MilestoneChecklistId' })
  };
  return MilestoneChecklist;
};