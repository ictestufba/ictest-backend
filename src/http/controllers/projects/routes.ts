import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { list } from './list'
import { details } from './details'
import { create } from './create'
import { update } from './update'
import { deleteProject } from './delete-project'
import { addMember } from './add-member'
import { getTestCases } from './get-test-cases'

export async function projectsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/projects', list)
  app.get('/projects/:projectId', details)
  app.get('/projects/:projectId/test-cases', getTestCases)

  app.post('/projects', create)
  app.patch('/projects/:projectId/update', update)
  app.patch('/projects/:projectId/add-member', addMember)
  app.delete('/projects/:projectId', deleteProject)
}
