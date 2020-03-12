'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResearchSection = sequelize.define('ResearchSection', {
    name: DataTypes.STRING
  }, {});
  ResearchSection.associate = function(models) {
    // associations can be defined here
    ResearchSection.belongsToMany(models.Faculty, { through: 'Coordinators', foreignKey: 'ResearchSectionId' })

    ResearchSection.belongsToMany(models.Student, { through: 'Enrollments', foreignKey: 'ResearchSectionId' })

    ResearchSection.belongsTo(models.Period, { foreignKey: 'PeriodId' })
  };
  return ResearchSection;
};
