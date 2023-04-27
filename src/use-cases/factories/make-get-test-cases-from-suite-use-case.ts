import { PrismaSuitesRepository } from '@/repositories/prisma/prisma-suites-repository'
import { PrismaTestCasesRepository } from '@/repositories/prisma/prisma-test-cases-repository'
import { GetTestCasesFromSuiteUseCase } from '../get-test-cases-from-suite'

export function makeGetTestCasesFromSuiteUseCase() {
  const suitesRepository = new PrismaSuitesRepository()
  const testCasesRepository = new PrismaTestCasesRepository()

  const useCase = new GetTestCasesFromSuiteUseCase(
    suitesRepository,
    testCasesRepository,
  )

  return useCase
}
