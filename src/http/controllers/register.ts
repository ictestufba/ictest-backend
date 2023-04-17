import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { registerUseCase } from '@/use-cases/register'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    avatar: z.string().optional().default(''),
  })

  const { name, email, password, avatar } = registerBodySchema.parse(
    request.body,
  )

  try {
    await registerUseCase({
      name,
      email,
      password,
      avatar,
    })
  } catch (err) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}
