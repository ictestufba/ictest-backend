import { PrismaTestCasesRepository } from '@/repositories/prisma/prisma-test-cases-repository'
import { UpdateTestCaseUseCase } from '../update-test-case'

export function makeUpdateTestCaseUseCase() {
  const testCasesRepository = new PrismaTestCasesRepository()

  const useCase = new UpdateTestCaseUseCase(testCasesRepository)

  return useCase
}
