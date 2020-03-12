import express from 'express'

import BasicController from 'controller/BasicController.js'

/*
  Creates boilerplate routes for a controller that implements BasicController
  basic CRUD routes included are :

  <resource>/             : Get all entries of resource
  <resource>/:id          : Get specific item by :id of resource
  <resource>/create       : Insert entry for resource
  <resource>/update/:id   : Update specific entry by :id for resource
  <resource>/delete/:id   : Delete specific entry by :id for resource

  All Endpoints created by this class has no middleware and is not configured to accept any.
*/

export default class BasicRoute {
  constructor (controller) {
    if (!(controller instanceof BasicController)) {
      throw new Error('CONTROLLER_MISMATCH')
    }

    const router = express.Router()

    router.get('/', async (req, res, next) => {
      try {
        res.send(await controller.getAll())
      } catch (err) {
        next(err)
      }
    })

    router.get('/:id', async (req, res, next) => {
      try {
        res.send(await controller.getOne(req.params.id))
      } catch (err) {
        next(err)
      }
    })

    router.post('/create', async (req, res, next) => {
      try {
        res.send(await controller.createOne(req.params.id, req.body))
      } catch (err) {
        next(err)
      }
    })

    router.post('/update/:id', async (req, res, next) => {
      try {
        res.send(await controller.updateOne(req.params.id, req.body))
      } catch (err) {
        next(err)
      }
    })

    router.post('/delete/:id', async (req, res, next) => {
      try {
        res.send(await controller.deleteOne(req.params.id))
      } catch (err) {
        next(err)
      }
    })

    this.router = router
  }

  getRoute () {
    return this.router
  }
}
