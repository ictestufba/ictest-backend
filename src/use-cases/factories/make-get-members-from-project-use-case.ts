import { PrismaProjectsRepository } from '@/repositories/prisma/prisma-projects-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetMembersFromProjectUseCase } from '../get-members-from-project'

export function makeGetMembersFromProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository()
  const usersRepository = new PrismaUsersRepository()

  const useCase = new GetMembersFromProjectUseCase(
    projectsRepository,
    usersRepository,
  )

  return useCase
}
