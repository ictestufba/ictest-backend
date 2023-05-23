import { Project } from '@prisma/client'
import { ProjectsRepository } from '@/repositories/projects-repository'

interface CreateProjectUseCaseRequest {
  name: string
  code: string
  description: string | null
}

interface CreateProjectUseCaseResponse {
  project: Project
}

export class CreateProjectUseCase {
  constructor(private projectsRepository: ProjectsRepository) {}

  async execute({
    name,
    code,
    description,
  }: CreateProjectUseCaseRequest): Promise<CreateProjectUseCaseResponse> {
    const project = await this.projectsRepository.create({
      name,
      code,
      description,
    })

    return {
      project,
    }
  }
}
