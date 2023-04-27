import { PrismaTestCasesRepository } from '@/repositories/prisma/prisma-test-cases-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AssignTestCaseToUserUseCase } from '../assign-test-case-to-user'

export function makeAssignTestCaseToUserUseCase() {
  const testCasesRepository = new PrismaTestCasesRepository()
  const usersRepository = new PrismaUsersRepository()

  const useCase = new AssignTestCaseToUserUseCase(
    testCasesRepository,
    usersRepository,
  )

  return useCase
}
