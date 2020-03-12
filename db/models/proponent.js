'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proponent = sequelize.define('Proponent', {
    dateProposed: DataTypes.DATE
  }, {});
  Proponent.associate = function(models) {
    // associations can be defined here
  };
  return Proponent;
};