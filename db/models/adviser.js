'use strict';
module.exports = (sequelize, DataTypes) => {
  const Adviser = sequelize.define('Adviser', {
    status: DataTypes.STRING
  }, {
    timestamps: false
  });
  Adviser.associate = function(models) {
    // associations can be defined here
  };
  return Adviser;
};