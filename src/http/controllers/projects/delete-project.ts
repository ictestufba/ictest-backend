import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeDeleteProjectUseCase } from '@/use-cases/factories/make-delete-project-use-case'

export async function deleteProject(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const deleteProjectParamsSchema = z.object({
    projectId: z.string().uuid(),
  })

  const { projectId } = deleteProjectParamsSchema.parse(request.params)

  const deleteProjectUseCase = makeDeleteProjectUseCase()

  await deleteProjectUseCase.execute({
    projectId,
  })

  return reply.status(200).send()
}
