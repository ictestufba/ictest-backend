import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateProjectUseCase } from '@/use-cases/factories/make-create-project-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createProjectBodySchema = z.object({
    name: z.string(),
    code: z.string().max(10),
    description: z.string().nullable(),
    visibility: z.enum(['public', 'private']).default('private'),
    member_access: z.enum(['add_all', 'add_specific', 'dont_add']),
  })

  const { name, code, description, visibility, member_access } =
    createProjectBodySchema.parse(request.body)

  const createProjectUseCase = makeCreateProjectUseCase()

  await createProjectUseCase.execute({
    name,
    code,
    description,
    visibility,
    member_access,
  })

  return reply.status(201).send()
}
