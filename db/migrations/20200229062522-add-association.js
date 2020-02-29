'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Coordinator Belongs to One Faculty
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

    // Coordinator Has Many Research Section
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
      
    var PeriodHasManyResearchSection = queryInterface.addColumn(
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

    var ResearchProjectHasManyDefenseSchedule = queryInterface.addColumn(
      'DefenseSchedules',
      'ResearchProjectId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'ResearchProjects', // name of Source model
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )

    var DeanHasManyResearchProject = queryInterface.addColumn(
      'ResearchProjects',
      'DeanId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Deans', // name of Source model
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )

    return Promise.all([
      CoordinatorBelongsToFaculty,
      CoordinatorHasManyResearchSection,
      PeriodHasManyResearchSection,
      ResearchProjectHasManyDefenseSchedule,
      DeanHasManyResearchProject
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    var removeCoordinatorBelongsToFaculty = queryInterface.removeColumn(
      'Coordinators', // name of Source model
      'FacultyId' // key we want to remove
    )

    var removeCoordinatorHasManyResearchSection = queryInterface.removeColumn(
      'ResearchSections', // name of Source model
      'CoordinatorId' // key we want to remove
    )

    var removeResearchSectionHasOnePeriod = queryInterface.removeColumn(
      'ResearchSections', // name of Source model
      'PeriodId' // key we want to remove
    )

    var removeResearchProjectHasManyDefenseSchedule = queryInterface.removeColumn(
      'DefenseSchedules', // name of Source model
      'ResearchProjectId' // key we want to remove
    )

    var removeDeanHasManyResearchProject = queryInterface.removeColumn(
      'ResearchProjects', // name of Source model
      'DeanId' // key we want to remove
    )

    return Promise.all([
      removeCoordinatorBelongsToFaculty,
      removeCoordinatorHasManyResearchSection,
      removeResearchSectionHasOnePeriod,
      removeResearchProjectHasManyDefenseSchedule,
      removeDeanHasManyResearchProject
    ])
  }
};
