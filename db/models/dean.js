'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dean = sequelize.define('Dean', {
    dateAssigned: DataTypes.DATE
  }, {});
  Dean.associate = function(models) {
    // associations can be defined here
  };
  return Dean;
};