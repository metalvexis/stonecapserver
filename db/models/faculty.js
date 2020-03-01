'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faculty = sequelize.define('Faculty', {
    fName: DataTypes.STRING,
    mName: DataTypes.STRING,
    lName: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    bday: DataTypes.DATE,
    contact: DataTypes.STRING,
    email: DataTypes.STRING,
    dept: DataTypes.STRING,
    status: DataTypes.STRING,
    educBg: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Faculty.associate = function(models) {
    // associations can be defined here

    Faculty.belongsToMany(models.ResearchProject, { through: 'Adviser', foreignKey: 'FacultyId' })
    Faculty.belongsToMany(models.ResearchProject, { through: 'Panelist', foreignKey: 'FacultyId' })

    Faculty.belongsToMany(models.GradingSheet, { through: 'FacultyGradingSheet', foreignKey: 'FacultyId' })
    
    Faculty.hasMany(models.ConsultationSchedule)
  };
  return Faculty;
};