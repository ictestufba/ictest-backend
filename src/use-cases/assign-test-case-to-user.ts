import { TestCase } from '@prisma/client'
import { TestCasesRepository } from '@/repositories/test-cases-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { UserDoesNotExistError } from './errors/user-does-not-exist-error'

interface AssignTestCaseToUserUseCaseRequest {
  testCaseId: string
  userEmail: string
}

interface AssignTestCaseToUserUseCaseResponse {
  testCase: TestCase
}

export class AssignTestCaseToUserUseCase {
  constructor(
    private testCasesRepository: TestCasesRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    testCaseId,
    userEmail,
  }: AssignTestCaseToUserUseCaseRequest): Promise<AssignTestCaseToUserUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(userEmail)

    if (!user) {
      throw new UserDoesNotExistError()
    }

    const userId = user.id

    const testCaseFound = await this.testCasesRepository.assignToUser(
      testCaseId,
      userId,
    )

    if (!testCaseFound) {
      throw new ResourceNotFoundError()
    }

    const testCase = (await this.testCasesRepository.findById(
      testCaseId,
    )) as TestCase

    return {
      testCase,
    }
  }
}
