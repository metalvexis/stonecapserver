'use strict';
module.exports = (sequelize, DataTypes) => {
  const DefenseSchedule = sequelize.define('DefenseSchedule', {
    ResearchProjectId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    DefenseTypeId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    dateTime: DataTypes.DATE,
    venue: DataTypes.STRING
  }, {});
  DefenseSchedule.associate = function(models) {
    // associations can be defined here
  };
  return DefenseSchedule;
};
