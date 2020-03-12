'use strict';
module.exports = (sequelize, DataTypes) => {
  const Period = sequelize.define('Period', {
    schoolYear: DataTypes.STRING,
    semester: DataTypes.STRING
  }, {});
  Period.associate = function(models) {
    // associations can be defined here
  };
  return Period;
};