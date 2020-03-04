import express from 'express'

import BasicController from 'controller/BasicController.js'

export default class BasicRoute {
  constructor (controller) {
    if (!(controller instanceof BasicController)) {
      throw new Error('CONTROLLER_MISMATCH')
    }

    const router = express.Router()

    router.get('/', async (req, res) => res.send(await controller.getAll()))

    router.get('/:id', async (req, res) => res.send(await controller.getOne(req.params.id)))

    router.post('/create', async (req, res) => res.send(await controller.createOne(req.params.id, req.body)))

    router.post('/update/:id', async (req, res) => res.send(await controller.updateOne(req.params.id, req.body)))

    router.post('/delete/:id', async (req, res) => res.send(await controller.deleteOne(req.params.id)))

    this.router = router
  }

  getRoute () {
    return this.router
  }
}