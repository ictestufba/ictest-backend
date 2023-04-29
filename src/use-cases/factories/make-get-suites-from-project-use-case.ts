import { PrismaSuitesRepository } from '@/repositories/prisma/prisma-suites-repository'
import { PrismaProjectsRepository } from '@/repositories/prisma/prisma-projects-repository'
import { GetSuitesFromProjectUseCase } from '../get-suites-from-project'

export function makeGetSuitesFromProjectUseCase() {
  const suitesRepository = new PrismaSuitesRepository()
  const projectsRepository = new PrismaProjectsRepository()

  const useCase = new GetSuitesFromProjectUseCase(
    suitesRepository,
    projectsRepository,
  )

  return useCase
}
