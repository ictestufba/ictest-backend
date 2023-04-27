import { PrismaProjectsRepository } from '@/repositories/prisma/prisma-projects-repository'
import { GetProjectDetailsUseCase } from '../get-project-details'

export function makeGetProjectDetailsUseCase() {
  const projectsRepository = new PrismaProjectsRepository()

  const useCase = new GetProjectDetailsUseCase(projectsRepository)

  return useCase
}
