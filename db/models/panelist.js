'use strict';
module.exports = (sequelize, DataTypes) => {
  const Panelist = sequelize.define('Panelist', {
    dateAssigned: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  Panelist.associate = function(models) {
    // associations can be defined here
    Panelist.belongsToMany(models.Criteria, { through: 'GradingSheets', foreignKey: 'PanelistId' })
  };
  return Panelist;
};
