'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    var CoordinatorBelongsToFaculty = queryInterface.addColumn(
      'Coordinators',
      'FacultyId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Faculties', // name of Target model
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )

    var CoordinatorHasManyResearchSection = queryInterface.addColumn(
      'ResearchSections',
      'CoordinatorId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Coordinators', // name of Source model
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )

    var ResearchSectionHasOnePeriod = queryInterface.addColumn(
      'ResearchSections',
      'PeriodId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Periods', // name of Source model
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )

    return Promise.all([
      CoordinatorBelongsToFaculty,
      CoordinatorHasManyResearchSection,
      ResearchSectionHasOnePeriod
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    var removeFacultyId = queryInterface.removeColumn(
      'Coordinators', // name of Source model
      'FacultyId' // key we want to remove
    )

    var removeCoordinatorId = queryInterface.removeColumn(
      'ResearchSections', // name of Source model
      'CoordinatorId' // key we want to remove
    )

    var removePeriodId = queryInterface.removeColumn(
      'ResearchSections', // name of Source model
      'PeriodId' // key we want to remove
    )

    return Promise.all([
      removeFacultyId,
      removeCoordinatorId,
      removePeriodId
    ])
  }
};
