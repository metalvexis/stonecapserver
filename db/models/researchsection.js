'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResearchSection = sequelize.define('ResearchSection', {
  }, {});
  ResearchSection.associate = function(models) {
    // associations can be defined here
    ResearchSection.hasOne(models.Period)
    ResearchSection.belongsToMany(models.Student, { through: 'SectionStudents', as: 'ResearchSectionId' })
  };
  return ResearchSection;
};