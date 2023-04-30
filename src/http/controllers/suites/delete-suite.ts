import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeDeleteSuiteUseCase } from '@/use-cases/factories/make-delete-suite-use-case'

export async function deleteSuite(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const deleteSuiteParamsSchema = z.object({
    suiteId: z.string().uuid(),
  })

  const { suiteId } = deleteSuiteParamsSchema.parse(request.params)

  const deleteSuiteUseCase = makeDeleteSuiteUseCase()

  const suite = await deleteSuiteUseCase.execute({
    suiteId,
  })

  return reply.status(200).send(suite)
}
