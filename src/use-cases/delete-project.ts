import { ProjectsRepository } from '@/repositories/projects-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface DeleteProjectUseCaseRequest {
  projectId: string
}

export class DeleteProjectUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}

  async execute({ projectId }: DeleteProjectUseCaseRequest): Promise<void> {
    const projectToBeDeleted = await this.projectsRepository.findById(projectId)

    if (!projectToBeDeleted) {
      throw new ResourceNotFoundError()
    }

    await this.projectsRepository.delete(projectId)
  }
}
