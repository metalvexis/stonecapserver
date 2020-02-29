'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectCriteria = sequelize.define('ProjectCriteria', {
    rating: DataTypes.INTEGER
  }, {});
  ProjectCriteria.associate = function(models) {
    // associations can be defined here
  };
  return ProjectCriteria;
};