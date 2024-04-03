import { makeRemoveMemberFromProjectUseCase } from '@/use-cases/factories/make-remove-member-from-project-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function removeMember(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const removeMemberFromProjectParamsSchema = z.object({
    projectId: z.string().uuid(),
  })

  const removeMemberFromProjectBodySchema = z.object({
    userId: z.string().uuid(),
  })

  const { projectId } = removeMemberFromProjectParamsSchema.parse(
    request.params,
  )

  const { userId } = removeMemberFromProjectBodySchema.parse(request.body)

  const removeMemberFromProjectUseCase = makeRemoveMemberFromProjectUseCase()

  await removeMemberFromProjectUseCase.execute({
    projectId,
    userId,
  })

  return reply.status(204).send()
}
