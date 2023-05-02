import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetTestCasesFromSuiteUseCase } from '@/use-cases/factories/make-get-test-cases-from-suite-use-case'

export async function getTestCases(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getTestCasesFromSuiteParamsSchema = z.object({
    suiteId: z.string().uuid(),
  })

  const { suiteId } = getTestCasesFromSuiteParamsSchema.parse(request.params)

  const getTestCasesFromSuiteUseCase = makeGetTestCasesFromSuiteUseCase()

  const testCases = await getTestCasesFromSuiteUseCase.execute({
    suiteId,
  })

  return reply.status(200).send(testCases)
}
