import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { addMember } from './add-member'
import { create } from './create'
import { deleteProject } from './delete-project'
import { details } from './details'
import { getMembers } from './get-members'
import { getTestCases } from './get-test-cases'
import { list } from './list'
import { removeMember } from './remove-member'
import { update } from './update'

export async function projectsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/projects', list)
  app.get('/projects/:projectId', details)
  app.get('/projects/:projectId/test-cases', getTestCases)

  app.post('/projects', create)
  app.patch('/projects/:projectId/update', update)
  app.patch('/projects/:projectId/add-member', addMember)
  app.delete('/projects/:projectId/remove-member', removeMember)
  app.get('/projects/:projectId/members', getMembers)
  app.delete('/projects/:projectId', deleteProject)
}
