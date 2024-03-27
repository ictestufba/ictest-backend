import { PrismaProjectsRepository } from '@/repositories/prisma/prisma-projects-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RemoveMemberFromProjectUseCase } from '../remove-member-from-project'

export function makeRemoveMemberFromProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository()
  const usersRepository = new PrismaUsersRepository()

  const useCase = new RemoveMemberFromProjectUseCase(
    projectsRepository,
    usersRepository,
  )

  return useCase
}
