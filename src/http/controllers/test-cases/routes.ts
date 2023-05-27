import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { create } from './create'
import { details } from './details'
import { deleteTestCase } from './delete-test-case'
import { update } from './update'
import { assignToUser } from './assign-to-user'
import { getByUser } from './get-by-user'

export async function testCasesRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/test-cases/:testCaseId', details)

  app.post('/test-cases', create)
  app.get('/test-cases/user/:userEmail', getByUser)
  app.patch('/test-cases/:testCaseId/update', update)
  app.patch('/test-cases/:testCaseId/assign', assignToUser)
  app.delete('/test-cases/:testCaseId', deleteTestCase)
}
