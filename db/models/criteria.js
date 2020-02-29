'use strict';
module.exports = (sequelize, DataTypes) => {
  const Criteria = sequelize.define('Criteria', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    weight: DataTypes.INTEGER
  }, {});
  Criteria.associate = function(models) {
    // associations can be defined here
  };
  return Criteria;
};