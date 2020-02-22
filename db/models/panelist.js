'use strict';
module.exports = (sequelize, DataTypes) => {
  const Panelist = sequelize.define('Panelist', {
    semester: DataTypes.STRING,
    schoolYear: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Panelist.associate = function(models) {
    // associations can be defined here
  };
  return Panelist;
};