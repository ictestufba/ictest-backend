import { PrismaProjectsRepository } from '@/repositories/prisma/prisma-projects-repository'
import { PrismaSuitesRepository } from '@/repositories/prisma/prisma-suites-repository'
import { PrismaTestCasesRepository } from '@/repositories/prisma/prisma-test-cases-repository'
import { CreateTestCaseUseCase } from '../create-test-case'

export function makeCreateTestCaseUseCase() {
  const projectsRepository = new PrismaProjectsRepository()
  const suitesRepository = new PrismaSuitesRepository()
  const testCasesRepository = new PrismaTestCasesRepository()

  const useCase = new CreateTestCaseUseCase(
    projectsRepository,
    suitesRepository,
    testCasesRepository,
  )

  return useCase
}
