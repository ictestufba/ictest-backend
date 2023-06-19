import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeUnassignTestCaseUseCase } from '@/use-cases/factories/make-unassign-test-case'

export async function unassign(request: FastifyRequest, reply: FastifyReply) {
  const unassignTestCaseParamsSchema = z.object({
    testCaseId: z.string().uuid(),
  })

  const { testCaseId } = unassignTestCaseParamsSchema.parse(request.params)

  const unassignTestCaseUseCase = makeUnassignTestCaseUseCase()

  const testCase = await unassignTestCaseUseCase.execute({
    testCaseId,
  })

  return reply.status(200).send(testCase)
}
