import { SuitesRepository } from '@/repositories/suites-repository'
import { Suite } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetSuiteDetailsUseCaseRequest {
  suiteId: string
}

interface GetSuiteDetailsUseCaseResponse {
  suite: Suite
}

export class GetSuiteDetailsUseCase {
  constructor(private suitesRepository: SuitesRepository) {}

  async execute({
    suiteId,
  }: GetSuiteDetailsUseCaseRequest): Promise<GetSuiteDetailsUseCaseResponse> {
    const suite = await this.suitesRepository.findById(suiteId)

    if (!suite) {
      throw new ResourceNotFoundError()
    }

    return {
      suite,
    }
  }
}
