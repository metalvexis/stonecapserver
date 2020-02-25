'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResearchProject = sequelize.define('ResearchProject', {
    title: DataTypes.STRING,
    abstract: DataTypes.STRING,
    schoolYear: DataTypes.STRING,
    semester: DataTypes.STRING,
    status: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  }, {});
  ResearchProject.associate = function(models) {
    // associations can be defined here
  };
  return ResearchProject;
};