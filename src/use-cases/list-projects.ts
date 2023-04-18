import { Project } from '@prisma/client'
import { ProjectsRepository } from '@/repositories/projects-repository'

interface ListProjectsUseCaseResponse {
  projects: Project[]
}

export class ListProjectsUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}

  async execute(): Promise<ListProjectsUseCaseResponse> {
    const projects = await this.projectsRepository.list()

    return {
      projects,
    }
  }
}
