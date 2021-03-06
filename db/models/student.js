'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    fName: DataTypes.STRING,
    mName: DataTypes.STRING,
    lName: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    bday: DataTypes.DATE,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    dept: DataTypes.STRING,
    course: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsToMany(models.ResearchSection, { through: 'SectionStudent', foreignKey: 'StudentId' })
    Student.belongsToMany(models.ResearchProject, { through: 'Proponents', foreignKey: 'StudentId' })

    Student.belongsToMany(models.Notification, { through: 'StudentNotifications', foreignKey: 'StudentId' })
  };
  return Student;
};