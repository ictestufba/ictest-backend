import { PrismaProjectsRepository } from '@/repositories/prisma/prisma-projects-repository'
import { UpdateProjectUseCase } from '../update-project'

export function makeUpdateProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository()

  const useCase = new UpdateProjectUseCase(projectsRepository)

  return useCase
}
