import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeUpdateSuiteUseCase } from '@/use-cases/factories/make-update-suite-use-case'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateSuiteParamsSchema = z.object({
    suiteId: z.string().uuid(),
  })

  const updateSuiteBodySchema = z.object({
    data: z.object({
      title: z.string().optional(),
      description: z.string().optional().nullable(),
      pre_conditions: z.string().optional().nullable(),
    }),
  })

  const { suiteId } = updateSuiteParamsSchema.parse(request.params)

  const { data } = updateSuiteBodySchema.parse(request.body)

  const updateSuiteUseCase = makeUpdateSuiteUseCase()

  const suite = await updateSuiteUseCase.execute({
    suiteId,
    data,
  })

  return reply.status(200).send(suite)
}
