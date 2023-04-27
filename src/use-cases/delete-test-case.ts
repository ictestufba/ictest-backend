import { TestCasesRepository } from '@/repositories/test-cases-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface DeleteTestCaseUseCaseRequest {
  testCaseId: string
}

export class DeleteTestCaseUseCase {
  constructor(private testCasesRepository: TestCasesRepository) {}

  async execute({ testCaseId }: DeleteTestCaseUseCaseRequest): Promise<void> {
    const testCaseToBeDeleted = await this.testCasesRepository.findById(
      testCaseId,
    )

    if (!testCaseToBeDeleted) {
      throw new ResourceNotFoundError()
    }

    await this.testCasesRepository.delete(testCaseId)
  }
}
