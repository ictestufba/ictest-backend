import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetSuiteDetailsUseCase } from '@/use-cases/factories/make-get-suite-details-use-case'

export async function details(request: FastifyRequest, reply: FastifyReply) {
  const getSuiteDetailsParamsSchema = z.object({
    suiteId: z.string().uuid(),
  })

  const { suiteId } = getSuiteDetailsParamsSchema.parse(request.params)

  const getSuiteDetailsUseCase = makeGetSuiteDetailsUseCase()

  const suite = await getSuiteDetailsUseCase.execute({
    suiteId,
  })

  return reply.status(200).send(suite)
}
