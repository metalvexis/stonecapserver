'use strict';
module.exports = (sequelize, DataTypes) => {
  const Period = sequelize.define('Period', {
    semester: DataTypes.STRING,
    schoolYear: DataTypes.STRING
  }, {});
  Period.associate = function(models) {
    // associations can be defined here
  };
  return Period;
};