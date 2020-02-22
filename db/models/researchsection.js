'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResearchSection = sequelize.define('ResearchSection', {
    semester: DataTypes.STRING,
    schoolYear: DataTypes.STRING
  }, {});
  ResearchSection.associate = function(models) {
    // associations can be defined here
  };
  return ResearchSection;
};