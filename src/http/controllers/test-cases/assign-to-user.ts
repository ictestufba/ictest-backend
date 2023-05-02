import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeAssignTestCaseToUserUseCase } from '@/use-cases/factories/make-assign-test-case-to-user-use-case'

export async function assignToUser(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const assignTestCaseToUserParamsSchema = z.object({
    testCaseId: z.string().uuid(),
  })

  const assignTestCaseToUserBodySchema = z.object({
    userEmail: z.string().email(),
  })

  const { testCaseId } = assignTestCaseToUserParamsSchema.parse(request.params)

  const { userEmail } = assignTestCaseToUserBodySchema.parse(request.body)

  const assignTestCaseToUserUseCase = makeAssignTestCaseToUserUseCase()

  const testCase = await assignTestCaseToUserUseCase.execute({
    testCaseId,
    userEmail,
  })

  return reply.status(200).send(testCase)
}
