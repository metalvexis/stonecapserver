'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentNotification = sequelize.define('StudentNotification', {
    StudentId: DataTypes.INTEGER,
    NotificationId: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  StudentNotification.associate = function(models) {
    // associations can be defined here
  };
  return StudentNotification;
};