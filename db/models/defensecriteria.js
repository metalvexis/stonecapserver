'use strict';
module.exports = (sequelize, DataTypes) => {
  const DefenseCriteria = sequelize.define('DefenseCriteria', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    weight: DataTypes.INTEGER
  }, {});
  DefenseCriteria.associate = function(models) {
    // associations can be defined here
  };
  return DefenseCriteria;
};