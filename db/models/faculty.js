'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faculty = sequelize.define('Faculty', {
    fName: DataTypes.STRING,
    mName: DataTypes.STRING,
    lName: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    bday: DataTypes.DATE,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    dept: DataTypes.STRING,
    status: DataTypes.STRING,
    educBg: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Faculty.associate = function(models) {
    // associations can be defined here
  };
  return Faculty;
};