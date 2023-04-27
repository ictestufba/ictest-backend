import { PrismaProjectsRepository } from '@/repositories/prisma/prisma-projects-repository'
import { DeleteProjectUseCase } from '../delete-project'

export function makeDeleteProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository()

  const useCase = new DeleteProjectUseCase(projectsRepository)

  return useCase
}
