import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { create } from './create'
import { details } from './details'

export async function testCasesRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/test-cases/:testCaseId', details)

  app.post('/test-cases', create)
}
