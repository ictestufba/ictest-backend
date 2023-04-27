import { TestCase } from '@prisma/client'
import { TestCasesRepository } from '@/repositories/test-cases-repository'
import { SuitesRepository } from '@/repositories/suites-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetTestCasesFromSuiteUseCaseRequest {
  suiteId: string
}

interface GetTestCasesFromSuiteUseCaseResponse {
  testCases: TestCase[]
}

export class GetTestCasesFromSuiteUseCase {
  constructor(
    private suitesRepository: SuitesRepository,
    private testCasesRepository: TestCasesRepository,
  ) {}

  async execute({
    suiteId,
  }: GetTestCasesFromSuiteUseCaseRequest): Promise<GetTestCasesFromSuiteUseCaseResponse> {
    const suite = await this.suitesRepository.findById(suiteId)

    if (!suite) {
      throw new ResourceNotFoundError()
    }

    const testCases = await this.testCasesRepository.getTestCasesBySuiteId(
      suiteId,
    )

    return {
      testCases,
    }
  }
}
