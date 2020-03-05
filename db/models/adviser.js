'use strict';
module.exports = (sequelize, DataTypes) => {
  const Adviser = sequelize.define('Adviser', {
    status: DataTypes.STRING,
    dateAssigned: DataTypes.DATE
  }, {
    timestamps: false
  });
  Adviser.associate = function(models) {
    // associations can be defined here
  };
  return Adviser;
};