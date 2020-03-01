'use strict';
module.exports = (sequelize, DataTypes) => {
  const SectionStudent = sequelize.define('SectionStudent', {}, { timestamps: false });
  SectionStudent.associate = function(models) {
    // associations can be defined here
  };
  return SectionStudent;
};