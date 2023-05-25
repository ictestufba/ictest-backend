import { TestCasesRepository } from '@/repositories/test-cases-repository'
import { Prisma, TestCase } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface UpdateTestCaseUseCaseRequest {
  testCaseId: string
  data: Prisma.TestCaseUpdateInput
}

interface UpdateTestCaseUseCaseResponse {
  testCase: TestCase
}

export class UpdateTestCaseUseCase {
  constructor(private testCasesRepository: TestCasesRepository) {}

  async execute({
    testCaseId,
    data,
  }: UpdateTestCaseUseCaseRequest): Promise<UpdateTestCaseUseCaseResponse> {
    const testCase = await this.testCasesRepository.update(testCaseId, data)

    if (!testCase) {
      throw new ResourceNotFoundError()
    }

    return {
      testCase,
    }
  }
}
