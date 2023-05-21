import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { usersRoutes } from './http/controllers/users/routes'
import { projectsRoutes } from './http/controllers/projects/routes'
import { testCasesRoutes } from './http/controllers/test-cases/routes'
// import swaggerUi from 'swagger-ui-express'
// import swaggerDocs from './swagger.json'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifyCookie)

app.register(usersRoutes)
app.register(projectsRoutes)
app.register(testCasesRoutes)

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.setErrorHandler((error, _, reply) => {
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

  return reply.status(500).send({ message: 'Internal server error.' })
})
