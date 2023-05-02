import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { create } from './create'
import { details } from './details'
import { deleteTestCase } from './delete-test-case'
import { assignToUser } from './assign-to-user'

export async function testCasesRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/test-cases/:testCaseId', details)

  app.post('/test-cases', create)
  app.patch('/test-cases/:testCaseId/assign', assignToUser)
  app.delete('/test-cases/:testCaseId', deleteTestCase)
}
