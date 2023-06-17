import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetMembersFromProjectUseCase } from '@/use-cases/factories/make-get-members-from-project-use-case'

export async function getMembers(request: FastifyRequest, reply: FastifyReply) {
  const getMembersFromProjectParamsSchema = z.object({
    projectId: z.string().uuid(),
  })

  const { projectId } = getMembersFromProjectParamsSchema.parse(request.params)

  const getMembersFromProjectUseCase = makeGetMembersFromProjectUseCase()

  const users = await getMembersFromProjectUseCase.execute({
    projectId,
  })

  return reply.status(200).send(users)
}
