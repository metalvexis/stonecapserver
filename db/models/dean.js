'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dean = sequelize.define('Dean', {
    fName: DataTypes.STRING,
    mName: DataTypes.STRING,
    lName: DataTypes.STRING,
    address: DataTypes.STRING,
    dateAssigned: DataTypes.DATE,
    gender: DataTypes.STRING,
    bday: DataTypes.DATE,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    dept: DataTypes.STRING,
    status: DataTypes.STRING,
    educBg: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Dean.associate = function(models) {
    // associations can be defined here
  };
  return Dean;
};