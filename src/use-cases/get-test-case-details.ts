import { TestCasesRepository } from '@/repositories/test-cases-repository'
import { TestCase } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetTestCaseDetailsUseCaseRequest {
  testCaseId: string
}

interface GetTestCaseDetailsUseCaseResponse {
  testCase: TestCase
}

export class GetTestCaseDetailsUseCase {
  constructor(private testCasesRepository: TestCasesRepository) {}

  async execute({
    testCaseId,
  }: GetTestCaseDetailsUseCaseRequest): Promise<GetTestCaseDetailsUseCaseResponse> {
    const testCase = await this.testCasesRepository.findById(testCaseId)

    if (!testCase) {
      throw new ResourceNotFoundError()
    }

    return {
      testCase,
    }
  }
}
