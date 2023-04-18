import { ProjectsRepository } from '@/repositories/projects-repository'
import { Project } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetProjectDetailsUseCaseRequest {
  projectId: string
}

interface GetProjectDetailsUseCaseResponse {
  project: Project
}

export class GetProjectDetailsUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}

  async execute({
    projectId,
  }: GetProjectDetailsUseCaseRequest): Promise<GetProjectDetailsUseCaseResponse> {
    const project = await this.projectsRepository.findById(projectId)

    if (!project) {
      throw new ResourceNotFoundError()
    }

    return {
      project,
    }
  }
}
