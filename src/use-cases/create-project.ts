import { Project } from '@prisma/client'
import { ProjectsRepository } from '@/repositories/projects-repository'

interface CreateProjectUseCaseRequest {
  name: string
  code: string
  description: string | null
  visibility: 'private' | 'public'
  member_access: 'add_all' | 'add_specific' | 'dont_add'
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
    visibility,
    member_access,
  }: CreateProjectUseCaseRequest): Promise<CreateProjectUseCaseResponse> {
    const project = await this.projectsRepository.create({
      name,
      code,
      description,
      visibility,
      member_access,
    })

    return {
      project,
    }
  }
}
