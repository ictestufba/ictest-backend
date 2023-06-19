import { TestCase } from '@prisma/client'
import { TestCasesRepository } from '@/repositories/test-cases-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface UnassignTestCaseUseCaseRequest {
  testCaseId: string
}

interface UnassignTestCaseUseCaseResponse {
  testCase: TestCase
}

export class UnassignTestCaseUseCase {
  constructor(private testCasesRepository: TestCasesRepository) {}

  async execute({
    testCaseId,
  }: UnassignTestCaseUseCaseRequest): Promise<UnassignTestCaseUseCaseResponse> {
    const testCase = await this.testCasesRepository.findById(testCaseId)

    if (!testCase) {
      throw new ResourceNotFoundError()
    }

    await this.testCasesRepository.unassign(testCaseId)

    return {
      testCase,
    }
  }
}
