import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListProjectsUseCase } from '@/use-cases/factories/make-list-projects-use-case'

export async function list(request: FastifyRequest, reply: FastifyReply) {
  // TODO: Acrescentar parâmetros para esse caso de uso: busca tipo like por
  // nome e paginação.

  const listProjectsUseCase = makeListProjectsUseCase()

  const { projects } = await listProjectsUseCase.execute()

  return reply.status(200).send({
    projects,
  })
}
