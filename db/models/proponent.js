'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proponent = sequelize.define('Proponent', {
    startDate: DataTypes.DATE
  }, {});
  Proponent.associate = function(models) {
    // associations can be defined here
  };
  return Proponent;
};