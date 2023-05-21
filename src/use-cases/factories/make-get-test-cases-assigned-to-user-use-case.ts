import { PrismaTestCasesRepository } from '@/repositories/prisma/prisma-test-cases-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetTestCasesAssignedToUserUseCase } from '../get-test-cases-assigned-to-user'

export function makeGetTestCasesAssignedToUserUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const testCasesRepository = new PrismaTestCasesRepository()

  const useCase = new GetTestCasesAssignedToUserUseCase(
    usersRepository,
    testCasesRepository,
  )

  return useCase
}
