import { PrismaProjectsRepository } from '@/repositories/prisma/prisma-projects-repository'
import { PrismaTestCasesRepository } from '@/repositories/prisma/prisma-test-cases-repository'
import { CreateTestCaseUseCase } from '../create-test-case'

export function makeCreateTestCaseUseCase() {
  const projectsRepository = new PrismaProjectsRepository()
  const testCasesRepository = new PrismaTestCasesRepository()

  const useCase = new CreateTestCaseUseCase(
    projectsRepository,
    testCasesRepository,
  )

  return useCase
}
