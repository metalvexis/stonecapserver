'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proponent = sequelize.define('Proponent', {}, { timestamp: false });
  Proponent.associate = function(models) {
    // associations can be defined here
  };
  return Proponent;
};