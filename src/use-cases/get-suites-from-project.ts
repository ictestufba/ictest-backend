import { Suite } from '@prisma/client'
import { SuitesRepository } from '@/repositories/suites-repository'
import { ProjectsRepository } from '@/repositories/projects-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetSuitesFromProjectUseCaseRequest {
  project_id: string
}

interface GetSuitesFromProjectUseCaseResponse {
  suites: Suite[]
}

export class GetSuitesFromProjectUseCase {
  constructor(
    private suitesRepository: SuitesRepository,
    private projectsRepository: ProjectsRepository,
  ) {}

  async execute({
    project_id,
  }: GetSuitesFromProjectUseCaseRequest): Promise<GetSuitesFromProjectUseCaseResponse> {
    const project = await this.projectsRepository.findById(project_id)

    if (!project) {
      throw new ResourceNotFoundError()
    }

    const suites = await this.suitesRepository.getSuitesByProjectId(project_id)

    return {
      suites,
    }
  }
}
