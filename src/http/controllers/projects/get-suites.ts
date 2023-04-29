import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetSuitesFromProjectUseCase } from '@/use-cases/factories/make-get-suites-from-project-use-case'

export async function getSuites(request: FastifyRequest, reply: FastifyReply) {
  const getSuitesFromProjectParamsSchema = z.object({
    project_id: z.string().uuid(),
  })

  const { project_id } = getSuitesFromProjectParamsSchema.parse(request.params)

  const getSuitesFromProjectUseCase = makeGetSuitesFromProjectUseCase()

  const suites = await getSuitesFromProjectUseCase.execute({
    project_id,
  })

  return reply.status(200).send(suites)
}
