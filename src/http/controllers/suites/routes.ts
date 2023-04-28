import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { create } from './create'
import { details } from './details'

export async function suitesRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/suites/:suiteId', details)

  app.post('/suites', create)
}
