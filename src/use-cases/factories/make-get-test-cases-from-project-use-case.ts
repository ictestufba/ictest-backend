import { PrismaProjectsRepository } from '@/repositories/prisma/prisma-projects-repository'
import { PrismaTestCasesRepository } from '@/repositories/prisma/prisma-test-cases-repository'
import { GetTestCasesFromProjectUseCase } from '../get-test-cases-from-project'

export function makeGetTestCasesFromProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository()
  const testCasesRepository = new PrismaTestCasesRepository()

  const useCase = new GetTestCasesFromProjectUseCase(
    projectsRepository,
    testCasesRepository,
  )

  return useCase
}
