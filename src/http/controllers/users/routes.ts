import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'

import { authenticate } from './authenticate'
import { register } from './register'
import { profile } from './profile'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  /** Autenticado */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
