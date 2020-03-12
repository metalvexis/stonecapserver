'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proponent = sequelize.define('Proponent', {
    ResearchProjectId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    StudentId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    dateProposed: DataTypes.DATE
  }, {});
  Proponent.associate = function(models) {
    // associations can be defined here
  };
  return Proponent;
};
