import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { create } from './create'
import { details } from './details'
import { deleteTestCase } from './delete-test-case'

export async function testCasesRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/test-cases/:testCaseId', details)

  app.post('/test-cases', create)
  app.delete('/test-cases/:testCaseId', deleteTestCase)
}
