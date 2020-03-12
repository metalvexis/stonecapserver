'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('Enrollment', {
    ResearchSectionId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    StudentId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    dateEnrolled: DataTypes.DATE
  }, {});
  Enrollment.associate = function(models) {
    // associations can be defined here
  };
  return Enrollment;
};
