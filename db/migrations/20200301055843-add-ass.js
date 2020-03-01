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

    var FacultyHasManyConsultationSchedule = queryInterface.addColumn(
      'ConsultationSchedules',
      'FacultyId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Faculties', // name of Source model
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )

    var ResearchProjectHasManyAppointment = queryInterface.addColumn(
      'Appointments',
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

    var ConsultationScheduleHasOneAppointment = queryInterface.addColumn(
      'Appointments',
      'ConsultationScheduleId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'ConsultationSchedules', // name of Source model
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
      DeanHasManyResearchProject,
      FacultyHasManyConsultationSchedule,
      ResearchProjectHasManyAppointment,
      ConsultationScheduleHasOneAppointment
    ])
  },

  down: (queryInterface, Sequelize) => {
    var removeCoordinatorBelongsToFaculty = queryInterface.removeColumn(
      'Coordinators', // name of Source model
      'FacultyId' // key we want to remove
    )

    var removeCoordinatorHasManyResearchSection = queryInterface.removeColumn(
      'ResearchSections', // name of Source model
      'CoordinatorId' // key we want to remove
    )

    var removePeriodHasManyResearchSection = queryInterface.removeColumn(
      'ResearchSections', // name of Source model
      'PeriodId' // key we want to remove
    )

    var removeResearchProjectHasManyDefenseSchedule = queryInterface.removeColumn(
      'DefenseSchedules', // name of Source model
      'ResearchProjectId' // key we want to remove
    )

    var removeDeanHasManyResearchProject = queryInterface.removeColumn(
      'ResearchProjects',
      'DeanId'
    )

    var removeFacultyHasManyConsultationSchedule = queryInterface.removeColumn(
      'ConsultationSchedules',
      'FacultyId'
    )

    var removeResearchProjectHasManyAppointment = queryInterface.removeColumn(
      'Appointments',
      'ResearchProjectId'
    )

    var removeConsultationScheduleHasOneAppointment = queryInterface.removeColumn(
      'Appointments',
      'ConsultationScheduleId'
    )

    return Promise.all([
      removeCoordinatorBelongsToFaculty,
      removeCoordinatorHasManyResearchSection,
      removePeriodHasManyResearchSection,
      removeResearchProjectHasManyDefenseSchedule,
      removeDeanHasManyResearchProject,
      removeFacultyHasManyConsultationSchedule,
      removeResearchProjectHasManyAppointment,
      removeConsultationScheduleHasOneAppointment
    ])
  }
};
