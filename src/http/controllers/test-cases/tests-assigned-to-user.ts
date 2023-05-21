import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetTestCasesAssignedToUserUseCase } from '@/use-cases/factories/make-get-test-cases-assigned-to-user-use-case'

export async function testsAssigned(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getTestCaseByUserParamsSchema = z.object({
    userEmail: z.string(),
  })

  const { userEmail } = getTestCaseByUserParamsSchema.parse(request.params)

  const getTestCaseByUserUseCase = makeGetTestCasesAssignedToUserUseCase()

  const testCases = await getTestCaseByUserUseCase.execute({
    userEmail,
  })

  return reply.status(200).send(testCases)
}
