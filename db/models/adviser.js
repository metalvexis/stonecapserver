'use strict';
module.exports = (sequelize, DataTypes) => {
  const Adviser = sequelize.define('Adviser', {
    FacultyId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    ResearchProjectId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    dateAssigned: DataTypes.DATE
  }, {});
  Adviser.associate = function(models) {
    // associations can be defined here
  };
  return Adviser;
};
