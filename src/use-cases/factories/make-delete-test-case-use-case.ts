import { PrismaTestCasesRepository } from '@/repositories/prisma/prisma-test-cases-repository'
import { DeleteTestCaseUseCase } from '../delete-test-case'

export function makeDeleteTestCaseUseCase() {
  const testCasesRepository = new PrismaTestCasesRepository()

  const useCase = new DeleteTestCaseUseCase(testCasesRepository)

  return useCase
}
