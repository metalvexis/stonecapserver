'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    gender: DataTypes.STRING,
    address: DataTypes.TEXT,
    fName: DataTypes.STRING,
    mName: DataTypes.STRING,
    lName: DataTypes.STRING,
    dept: DataTypes.STRING,
    course: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    bday: DataTypes.DATE,
    password: DataTypes.STRING,
    studentRefId: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsToMany(models.ResearchSection, { through: 'Enrollments', foreignKey: 'StudentId' })

    Student.belongsToMany(models.ResearchProject, { through: 'Proponents', foreignKey: 'StudentId' })
  };
  return Student;
};
