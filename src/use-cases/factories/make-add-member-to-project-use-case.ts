import { PrismaProjectsRepository } from '@/repositories/prisma/prisma-projects-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AddMemberToProjectUseCase } from '../add-member-to-project'

export function makeAddMemberToProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository()
  const usersRepository = new PrismaUsersRepository()

  const useCase = new AddMemberToProjectUseCase(
    projectsRepository,
    usersRepository,
  )

  return useCase
}
