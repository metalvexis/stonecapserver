'use strict';
module.exports = (sequelize, DataTypes) => {
  const DefenseType = sequelize.define('DefenseType', {
    category: DataTypes.STRING
  }, {});
  DefenseType.associate = function(models) {
    // associations can be defined here
    DefenseType.belongsToMany(models.ResearchProject, { through: 'DefenseSchedules', foreignKey: 'DefenseTypeId' })
  };
  return DefenseType;
};
