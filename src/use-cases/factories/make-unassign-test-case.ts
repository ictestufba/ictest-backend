import { PrismaTestCasesRepository } from '@/repositories/prisma/prisma-test-cases-repository'
import { UnassignTestCaseUseCase } from '../unassign-test-case'

export function makeUnassignTestCaseUseCase() {
  const testCasesRepository = new PrismaTestCasesRepository()

  const useCase = new UnassignTestCaseUseCase(testCasesRepository)

  return useCase
}
