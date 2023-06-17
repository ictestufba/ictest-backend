import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetTestCasesByUserUseCase } from '@/use-cases/factories/make-get-test-cases-by-user-use-case'

export async function getByUser(request: FastifyRequest, reply: FastifyReply) {
  const getTestCasesByUserParamsSchema = z.object({
    userEmail: z.string().email(),
  })

  const { userEmail } = getTestCasesByUserParamsSchema.parse(request.params)

  const getTestCasesByUserUseCase = makeGetTestCasesByUserUseCase()

  const testCases = await getTestCasesByUserUseCase.execute({
    userEmail,
  })

  return reply.status(200).send(testCases)
}
