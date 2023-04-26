import { PrismaProjectsRepository } from '@/repositories/prisma/prisma-projects-repository'
import { ListProjectsUseCase } from '../list-projects'

export function makeListProjectsUseCase() {
  const projectsRepository = new PrismaProjectsRepository()

  const useCase = new ListProjectsUseCase(projectsRepository)

  return useCase
}
