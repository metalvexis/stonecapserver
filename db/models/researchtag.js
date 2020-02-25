'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResearchTag = sequelize.define('ResearchTag', {
    name: DataTypes.STRING
  }, {});
  ResearchTag.associate = function(models) {
    // associations can be defined here
  };
  return ResearchTag;
};