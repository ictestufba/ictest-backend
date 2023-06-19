import { Project } from '@prisma/client'
import { ProjectsRepository } from '@/repositories/projects-repository'

interface CreateProjectUseCaseRequest {
  userId: string
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
    userId,
    name,
    code,
    description,
  }: CreateProjectUseCaseRequest): Promise<CreateProjectUseCaseResponse> {
    const project = await this.projectsRepository.create({
      name,
      code,
      description,
    })

    const projectId = project.id

    await this.projectsRepository.addMember(projectId, userId, 'admin')

    return {
      project,
    }
  }
}
