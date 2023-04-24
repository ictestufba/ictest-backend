import { SuitesRepository } from '@/repositories/suites-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface DeleteSuiteUseCaseRequest {
  suiteId: string
}

export class DeleteSuiteUseCase {
  constructor(private suitesRepository: SuitesRepository) {}

  async execute({ suiteId }: DeleteSuiteUseCaseRequest): Promise<void> {
    const suiteToBeDeleted = await this.suitesRepository.findById(suiteId)

    if (!suiteToBeDeleted) {
      throw new ResourceNotFoundError()
    }

    await this.suitesRepository.findByIdAndDelete(suiteId)
  }
}
