'use strict';
module.exports = (sequelize, DataTypes) => {
  const Adviser = sequelize.define('Adviser', {
    dateAssigned: DataTypes.DATE
  }, {});
  Adviser.associate = function(models) {
    // associations can be defined here
  };
  return Adviser;
};