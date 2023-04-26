import { PrismaTestCasesRepository } from '@/repositories/prisma/prisma-test-cases-repository'
import { GetTestCaseDetailsUseCase } from '../get-test-case-details'

export function makeGetTestCaseDetailsUseCase() {
  const testCasesRepository = new PrismaTestCasesRepository()

  const useCase = new GetTestCaseDetailsUseCase(testCasesRepository)

  return useCase
}
