import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetTestCasesFromProjectUseCase } from '@/use-cases/factories/make-get-test-cases-from-project-use-case'

export async function getTestCases(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getTestCasesFromProjectParamsSchema = z.object({
    projectId: z.string().uuid(),
  })

  const { projectId } = getTestCasesFromProjectParamsSchema.parse(
    request.params,
  )

  const getTestCasesFromProjectUseCase = makeGetTestCasesFromProjectUseCase()

  const testCases = await getTestCasesFromProjectUseCase.execute({
    projectId,
  })

  return reply.status(200).send(testCases)
}
