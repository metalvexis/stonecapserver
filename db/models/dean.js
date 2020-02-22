'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dean = sequelize.define('Dean', {
    fName: DataTypes.STRING,
    mName: DataTypes.STRING,
    lName: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Dean.associate = function(models) {
    // associations can be defined here
  };
  return Dean;
};