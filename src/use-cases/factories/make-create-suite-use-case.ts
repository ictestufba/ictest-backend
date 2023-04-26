import { PrismaProjectsRepository } from '@/repositories/prisma/prisma-projects-repository'
import { PrismaSuitesRepository } from '@/repositories/prisma/prisma-suites-repository'
import { CreateSuiteUseCase } from '../create-suite'

export function makeCreateSuiteUseCase() {
  const projectsRepository = new PrismaProjectsRepository()
  const suitesRepository = new PrismaSuitesRepository()

  const useCase = new CreateSuiteUseCase(projectsRepository, suitesRepository)

  return useCase
}
