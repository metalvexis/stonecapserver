'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faculty = sequelize.define('Faculty', {
    gender: DataTypes.STRING,
    address: DataTypes.TEXT,
    fName: DataTypes.STRING,
    mName: DataTypes.STRING,
    lName: DataTypes.STRING,
    dept: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    bday: DataTypes.DATE,
    educBg: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Faculty.associate = function(models) {
    // associations can be defined here

    Faculty.belongsToMany(models.ResearchSection, { through: 'Coordinators', foreignKey: 'FacultyId' })

    Faculty.belongsToMany(models.ResearchProject, { through: 'Panelists', foreignKey: 'FacultyId' })

    Faculty.belongsToMany(models.ResearchProject, { through: 'Advisers', foreignKey: 'FacultyId' })

  };
  return Faculty;
};
