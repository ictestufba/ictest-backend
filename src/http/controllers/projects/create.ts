import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateProjectUseCase } from '@/use-cases/factories/make-create-project-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createProjectBodySchema = z.object({
    name: z.string(),
    code: z.string().max(10),
    description: z.string().nullable(),
  })

  const { name, code, description } = createProjectBodySchema.parse(
    request.body,
  )

  const createProjectUseCase = makeCreateProjectUseCase()

  const project = await createProjectUseCase.execute({
    name,
    code,
    description,
  })

  return reply.status(201).send(project)
}
