'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coordinator = sequelize.define('Coordinator', {
    FacultyId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    ResearchSectionId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    dateAssigned: DataTypes.DATE
  }, {});
  Coordinator.associate = function(models) {
    // associations can be defined here
  };
  return Coordinator;
};
