import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateSuiteUseCase } from '@/use-cases/factories/make-create-suite-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createSuiteBodySchema = z.object({
    title: z.string(),
    description: z.string().nullable(),
    pre_conditions: z.string().nullable(),
    project_id: z.string().uuid(),
  })

  const { title, description, pre_conditions, project_id } =
    createSuiteBodySchema.parse(request.body)

  const createSuiteUseCase = makeCreateSuiteUseCase()

  const suite = await createSuiteUseCase.execute({
    title,
    description,
    pre_conditions,
    project_id,
  })

  return reply.status(201).send(suite)
}
