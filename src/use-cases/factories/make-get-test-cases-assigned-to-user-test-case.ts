import { PrismaTestCasesRepository } from '@/repositories/prisma/prisma-test-cases-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetTestCasesByUserUseCase } from '../get-test-cases-by-user'

export function makeGetTestCasesAssignedToUserUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const testCasesRepository = new PrismaTestCasesRepository()

  const useCase = new GetTestCasesByUserUseCase(
    testCasesRepository,
    usersRepository,
  )

  return useCase
}
