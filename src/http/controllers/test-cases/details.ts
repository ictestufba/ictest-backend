import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetTestCaseDetailsUseCase } from '@/use-cases/factories/make-get-test-case-details-use-case'

export async function details(request: FastifyRequest, reply: FastifyReply) {
  const getTestCaseDetailsParamsSchema = z.object({
    testCaseId: z.string().uuid(),
  })

  const { testCaseId } = getTestCaseDetailsParamsSchema.parse(request.params)

  const getTestCaseDetailsUseCase = makeGetTestCaseDetailsUseCase()

  const testCase = await getTestCaseDetailsUseCase.execute({
    testCaseId,
  })

  return reply.status(200).send(testCase)
}
