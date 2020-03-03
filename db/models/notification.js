'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    isRead: DataTypes.BOOLEAN,
    message: DataTypes.TEXT,
    category: DataTypes.STRING
  }, {});
  Notification.associate = function(models) {
    // associations can be defined here
    Notification.belongsToMany(models.Student, { through: 'StudentNotifications', foreignKey: 'NotificationId' })
    Notification.belongsToMany(models.Faculty, { through: 'FacultyNotifications', foreignKey: 'NotificationId' })
  };
  return Notification;
};