'use strict';
module.exports = (sequelize, DataTypes) => {
  const Adviser = sequelize.define('Adviser', {
    semester: DataTypes.STRING,
    schoolYear: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Adviser.associate = function(models) {
    // associations can be defined here
  };
  return Adviser;
};