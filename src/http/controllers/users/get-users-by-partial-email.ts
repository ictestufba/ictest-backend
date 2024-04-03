import { makeGetUsersByPartialEmailUseCase } from '@/use-cases/factories/make-get-users-by-partial-email-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
  const getMembersFromProjectParamsSchema = z.object({
    email: z.string().optional(),
  })

  const { email } = getMembersFromProjectParamsSchema.parse(request.query)

  const getUsersByPartialEmailUseCase = makeGetUsersByPartialEmailUseCase()

  const users = await getUsersByPartialEmailUseCase.execute({
    email: email ?? '',
  })

  return reply.status(200).send(users)
}
