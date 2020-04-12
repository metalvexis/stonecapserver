'use strict';
module.exports = (sequelize, DataTypes) => {
  const Panelist = sequelize.define('Panelist', {
    FacultyId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    ResearchProjectId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    dateAssigned: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  Panelist.associate = function(models) {
    Panelist.belongsTo(models.Faculty)
    Panelist.belongsTo(models.ResearchProject)

    Panelist.belongsToMany(models.Criteria, { through: 'GradingSheets', foreignKey: 'PanelistId' })
  };
  return Panelist;
};
