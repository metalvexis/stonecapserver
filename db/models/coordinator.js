'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coordinator = sequelize.define('Coordinator', {
    dateAssigned: DataTypes.DATE
  }, {});
  Coordinator.associate = function(models) {
    // associations can be defined here
  };
  return Coordinator;
};