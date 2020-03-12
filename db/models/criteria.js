'use strict';
module.exports = (sequelize, DataTypes) => {
  const Criteria = sequelize.define('Criteria', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    percentage: DataTypes.NUMERIC(2, 2)
  }, {});
  Criteria.associate = function(models) {
    // associations can be defined here
    Criteria.belongsToMany(models.Panelist, { through: 'GradingSheets', foreignKey: 'CriteriaId' })
  };
  return Criteria;
};
