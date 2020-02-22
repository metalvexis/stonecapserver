'use strict';
module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define('Consultation', {
    semester: DataTypes.STRING,
    schoolYear: DataTypes.STRING,
    feedback: DataTypes.STRING
  }, {});
  Consultation.associate = function(models) {
    // associations can be defined here
  };
  return Consultation;
};