import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeUpdateProjectUseCase } from '@/use-cases/factories/make-update-project-test-case'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateProjectParamsSchema = z.object({
    projectId: z.string().uuid(),
  })

  const updateProjectBodySchema = z.object({
    data: z.object({
      name: z.string().optional(),
      code: z.string().max(10).optional(),
      description: z.string().nullable(),
    }),
  })

  const { projectId } = updateProjectParamsSchema.parse(request.params)

  const { data } = updateProjectBodySchema.parse(request.body)

  const createProjectUseCase = makeUpdateProjectUseCase()

  await createProjectUseCase.execute({
    projectId,
    data,
  })

  return reply.status(201).send()
}
