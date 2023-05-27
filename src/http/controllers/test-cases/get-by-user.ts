import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetTestCasesByUserUseCase } from '@/use-cases/factories/make-get-test-cases-by-user-use-case'

export async function getByUser(request: FastifyRequest, reply: FastifyReply) {
  const getTestCasesByUserBodySchema = z.object({
    userEmail: z.string().email(),
  })

  const { userEmail } = getTestCasesByUserBodySchema.parse(request.body)

  const assignTestCaseToUserUseCase = makeGetTestCasesByUserUseCase()

  const testCases = await assignTestCaseToUserUseCase.execute({
    userEmail,
  })

  return reply.status(200).send(testCases)
}
