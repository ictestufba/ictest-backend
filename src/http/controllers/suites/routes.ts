import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { create } from './create'
import { details } from './details'
import { deleteSuite } from './delete-suite'
import { update } from './update'
import { getTestCases } from './get-test-cases'

export async function suitesRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/suites/:suiteId', details)
  app.get('/suites/:suiteId/test-cases', getTestCases)

  app.post('/suites', create)
  app.patch('/suites/:suiteId/update', update)
  app.delete('/suites/:suiteId', deleteSuite)
}
