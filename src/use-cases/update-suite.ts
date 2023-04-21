import { SuitesRepository } from '@/repositories/suites-repository'
import { Prisma, Suite } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface UpdateSuiteUseCaseRequest {
  suiteId: string
  data: Prisma.SuiteUpdateInput
}

interface UpdateSuiteUseCaseResponse {
  suite: Suite
}

export class UpdateSuiteUseCase {
  constructor(private suitesRepository: SuitesRepository) {}

  async execute({
    suiteId,
    data,
  }: UpdateSuiteUseCaseRequest): Promise<UpdateSuiteUseCaseResponse> {
    const suite = await this.suitesRepository.findByIdAndUpdate(suiteId, data)

    if (!suite) {
      throw new ResourceNotFoundError()
    }

    return {
      suite,
    }
  }
}
