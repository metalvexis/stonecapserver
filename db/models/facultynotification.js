'use strict';
module.exports = (sequelize, DataTypes) => {
  const FacultyNotification = sequelize.define('FacultyNotification', {
    FacultyId: DataTypes.INTEGER,
    NotificationId: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  FacultyNotification.associate = function(models) {
    // associations can be defined here
  };
  return FacultyNotification;
};