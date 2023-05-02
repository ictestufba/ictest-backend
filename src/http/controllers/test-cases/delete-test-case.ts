import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeDeleteTestCaseUseCase } from '@/use-cases/factories/make-delete-test-case-use-case'

export async function deleteTestCase(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const deleteTestCaseParamsSchema = z.object({
    testCaseId: z.string().uuid(),
  })

  const { testCaseId } = deleteTestCaseParamsSchema.parse(request.params)

  const deleteTestCaseUseCase = makeDeleteTestCaseUseCase()

  const testCase = await deleteTestCaseUseCase.execute({
    testCaseId,
  })

  return reply.status(200).send(testCase)
}
