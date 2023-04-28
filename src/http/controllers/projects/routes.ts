import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { list } from './list'
import { details } from './details'
import { create } from './create'
import { update } from './update'

export async function projectsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/projects', list)
  app.get('/projects/:projectId', details)

  app.post('/projects', create)
  app.patch('/projects/:projectId/update', update)
}
