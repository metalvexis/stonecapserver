'use strict';
module.exports = (sequelize, DataTypes) => {
  const Criteria = sequelize.define('Criteria', {
    title: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {});
  Criteria.associate = function(models) {
    // associations can be defined here
    Criteria.belongsToMany(models.ResearchProject, { through: 'GradingSheets', foreignKey: 'CriteriaId' })
  };
  return Criteria;
};