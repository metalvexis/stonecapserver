'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResearchProject = sequelize.define('ResearchProject', {
    title: DataTypes.STRING,
    abstract: DataTypes.STRING,
    status: DataTypes.STRING,
    published: DataTypes.BOOLEAN,
    tags: DataTypes.STRING
  }, {});
  ResearchProject.associate = function(models) {
    // associations can be defined here
    ResearchProject.belongsToMany(models.Student, { through: 'Proponents', as: 'ResearchProjectId' })
  };
  return ResearchProject;
};