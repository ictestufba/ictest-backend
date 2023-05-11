import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeAddMemberToProjectUseCase } from '@/use-cases/factories/make-add-member-to-project-use-case'

export async function addMember(request: FastifyRequest, reply: FastifyReply) {
  const addMemberToProjectParamsSchema = z.object({
    projectId: z.string().uuid(),
  })

  const addMemberToProjectBodySchema = z.object({
    userEmail: z.string().email(),
  })

  const { projectId } = addMemberToProjectParamsSchema.parse(request.params)

  const { userEmail } = addMemberToProjectBodySchema.parse(request.body)

  const addMemberToProjectUseCase = makeAddMemberToProjectUseCase()

  await addMemberToProjectUseCase.execute({
    projectId,
    userEmail,
  })

  return reply.status(200).send(userEmail)
}
