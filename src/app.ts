import fastifyCookie from '@fastify/cookie'
import cors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { projectsRoutes } from './http/controllers/projects/routes'
import { testCasesRoutes } from './http/controllers/test-cases/routes'
import { usersRoutes } from './http/controllers/users/routes'

export const app = fastify()

app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '120m',
  },
})

app.register(fastifyCookie)

app.register(usersRoutes)
app.register(projectsRoutes)
app.register(testCasesRoutes)

app.setErrorHandler((error: Error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Fazer o log para alguma ferramenta de observabilidade (ex: Datadog)
  }

  return reply.status(500).send({
    message: 'Internal server error.',
    error: error.message,
  })
})
