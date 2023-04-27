import { Suite } from '@prisma/client'
import { ProjectsRepository } from '@/repositories/projects-repository'
import { SuitesRepository } from '@/repositories/suites-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface CreateSuiteUseCaseRequest {
  project_id: string
  title: string
  description: string | null
  pre_conditions: string | null
}

interface CreateSuiteUseCaseResponse {
  suite: Suite
}

export class CreateSuiteUseCase {
  constructor(
    private projectsRepository: ProjectsRepository,
    private suitesRepository: SuitesRepository,
  ) {}

  async execute({
    project_id,
    title,
    description,
    pre_conditions,
  }: CreateSuiteUseCaseRequest): Promise<CreateSuiteUseCaseResponse> {
    const project = await this.projectsRepository.findById(project_id)

    if (!project) {
      throw new ResourceNotFoundError()
    }

    const suite = await this.suitesRepository.create({
      project_id,
      title,
      description,
      pre_conditions,
    })

    return {
      suite,
    }
  }
}
