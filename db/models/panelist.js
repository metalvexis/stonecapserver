'use strict';
module.exports = (sequelize, DataTypes) => {
  const Panelist = sequelize.define('Panelist', {
    status: DataTypes.STRING
  }, {
    timestamps: false
  });
  Panelist.associate = function(models) {
    // associations can be defined here
  };
  return Panelist;
};