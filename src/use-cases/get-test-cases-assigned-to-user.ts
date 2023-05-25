import { TestCase } from '@prisma/client'
import { TestCasesRepository } from '@/repositories/test-cases-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { UserDoesNotExistError } from './errors/user-does-not-exist-error'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetTestCasesAssignedToUserUseCaseRequest {
  userEmail: string
}

interface GetTestCasesAssignedToUserUseCaseResponse {
  testCases: TestCase[]
}

export class GetTestCasesAssignedToUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private testCasesRepository: TestCasesRepository,
  ) {}

  async execute({
    userEmail,
  }: GetTestCasesAssignedToUserUseCaseRequest): Promise<GetTestCasesAssignedToUserUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(userEmail)

    if (!user) {
      throw new UserDoesNotExistError()
    }

    const testCases = await this.testCasesRepository.getTestCasesAssignedToUser(
      userEmail,
    )

    if (!testCases) {
      throw new ResourceNotFoundError()
    }

    return {
      testCases,
    }
  }
}
