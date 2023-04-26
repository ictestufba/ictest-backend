import { PrismaProjectsRepository } from '@/repositories/prisma/prisma-projects-repository'
import { CreateProjectUseCase } from '../create-project'

export function makeCreateProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository()

  const useCase = new CreateProjectUseCase(projectsRepository)

  return useCase
}
