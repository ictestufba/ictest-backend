import { ProjectsRepository } from '@/repositories/projects-repository'
import { Prisma, Project } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface UpdateProjectUseCaseRequest {
  projectId: string
  data: Prisma.ProjectUpdateInput
}

interface UpdateProjectUseCaseResponse {
  project: Project
}

export class UpdateProjectUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}

  async execute({
    projectId,
    data,
  }: UpdateProjectUseCaseRequest): Promise<UpdateProjectUseCaseResponse> {
    const project = await this.projectsRepository.findByIdAndUpdate(
      projectId,
      data,
    )

    if (!project) {
      throw new ResourceNotFoundError()
    }

    return {
      project,
    }
  }
}
