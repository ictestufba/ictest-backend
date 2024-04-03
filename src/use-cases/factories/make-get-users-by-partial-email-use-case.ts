import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUsersByPartialEmailUseCase } from '../get-users-by-partial-email'

export function makeGetUsersByPartialEmailUseCase() {
  const usersRepository = new PrismaUsersRepository()

  const useCase = new GetUsersByPartialEmailUseCase(usersRepository)

  return useCase
}
