import { TestCase } from '@prisma/client'
import { TestCasesRepository } from '@/repositories/test-cases-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { UserDoesNotExistError } from './errors/user-does-not-exist-error'

interface GetTestCasesByUserUseCaseRequest {
  userEmail: string
}

interface GetTestCasesByUserUseCaseResponse {
  testCases: TestCase[]
}

export class GetTestCasesByUserUseCase {
  constructor(
    private testCasesRepository: TestCasesRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    userEmail,
  }: GetTestCasesByUserUseCaseRequest): Promise<GetTestCasesByUserUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(userEmail)

    if (!user) {
      throw new UserDoesNotExistError()
    }

    const userId = user.id

    const testCases = await this.testCasesRepository.getTestCasesByUser(userId)

    return {
      testCases,
    }
  }
}
