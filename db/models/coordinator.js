'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coordinator = sequelize.define('Coordinator', {
    status: DataTypes.STRING,
    dateAssigned: DataTypes.DATE
  }, {
    timestamps: false
  });
  Coordinator.associate = function(models) {
    Coordinator.belongsTo(models.Faculty, { foreignKey: 'FacultyId' })
    Coordinator.hasMany(models.ResearchSection)
  };
  return Coordinator;
};
