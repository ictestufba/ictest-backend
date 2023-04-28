import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetProjectDetailsUseCase } from '@/use-cases/factories/make-get-project-details-use-case'

export async function details(request: FastifyRequest, reply: FastifyReply) {
  const getProjectDetailsParamsSchema = z.object({
    projectId: z.string().uuid(),
  })

  const { projectId } = getProjectDetailsParamsSchema.parse(request.params)

  const getProjectDetailsUseCase = makeGetProjectDetailsUseCase()

  const project = await getProjectDetailsUseCase.execute({
    projectId,
  })

  return reply.status(200).send(project)
}
