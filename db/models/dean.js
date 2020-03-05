'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dean = sequelize.define('Dean', {
    status: DataTypes.STRING,
    dateAssigned: DataTypes.DATE
  }, {
    timestamps: false
  });
  Dean.associate = function(models) {
    Dean.belongsTo(models.Faculty, { foreignKey: 'FacultyId' })
    Dean.hasMany(models.ResearchProject)
  };
  return Dean;
};
