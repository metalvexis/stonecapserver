'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResearchSection = sequelize.define('ResearchSection', {
  }, {});
  ResearchSection.associate = function(models) {
    // associations can be defined here
    ResearchSection.belongsToMany(models.Student, { through: 'SectionStudents', foreignKey: 'ResearchSectionId' })
  };
  return ResearchSection;
};