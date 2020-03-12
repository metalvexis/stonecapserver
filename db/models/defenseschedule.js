'use strict';
module.exports = (sequelize, DataTypes) => {
  const DefenseSchedule = sequelize.define('DefenseSchedule', {
    dateTime: DataTypes.DATE,
    venue: DataTypes.STRING
  }, {});
  DefenseSchedule.associate = function(models) {
    // associations can be defined here
  };
  return DefenseSchedule;
};