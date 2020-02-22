'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coordinator = sequelize.define('Coordinator', {
    semester: DataTypes.STRING,
    schoolYear: DataTypes.STRING,
    status: DataTypes.STRING,
    dateAssigned: DataTypes.DATE
  }, {});
  Coordinator.associate = function(models) {
    // associations can be defined here
  };
  return Coordinator;
};