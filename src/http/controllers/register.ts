import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

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

  await prisma.user.create({
    data: {
      name,
      email,
      password_hash: password,
      avatar,
    },
  })

  return reply.status(201).send()
}
