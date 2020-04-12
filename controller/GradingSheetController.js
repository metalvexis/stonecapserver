import BasicController from 'controller/BasicController.js'

import { DbModels } from 'db/'

export class GradingSheetController extends BasicController {
  constructor () {
    super('GradingSheets')
  }

  all () {
    return DbModels.GradingSheet.findAll({ include: { all: true } })
  }

  async createGradingSheet ({ ResearchProjectId, PanelistIds, criteria = [] }) {
    // Insert Criteria entry
    const criteriaList = await DbModels.Criteria.bulkCreate(criteria)

    // Remove existing Fresh GradingSheets for Panelist
    DbModels.GradingSheet.destroy({
      where: {
        PanelistId: {
          [DbModels.Sequelize.Op.in]: PanelistIds
        },
        ResearchProjectId,
        status: 'Fresh'
      }
    })

    // Create GradingSheets entry
    const createGradingSheetsTask = criteriaList.map(
      crit => {
        const criteriaToPanelist = PanelistIds.map(PanelistId => {
          return {
            CriteriaId: crit.id,
            PanelistId,
            ResearchProjectId,
            rating: 0,
            decision: '',
            status: 'Fresh'
          }
        })

        return DbModels.GradingSheet.bulkCreate(criteriaToPanelist)
      }
    )
    return Promise.all(createGradingSheetsTask)
  }

  importGradingSheet ({ GradingSheetId }) {
    // Fetch all Criteria related to GradingSheet
  }
}
