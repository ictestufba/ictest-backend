import { ProjectsRepository } from '@/repositories/projects-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { UserDoesNotExistError } from './errors/user-does-not-exist-error'

interface AddMemberToProjectUseCaseRequest {
  projectId: string
  userEmail: string
}

interface AddMemberToProjectUseCaseResponse {
  userEmail: string
}

export class AddMemberToProjectUseCase {
  constructor(
    private projectsRepository: ProjectsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    projectId,
    userEmail,
  }: AddMemberToProjectUseCaseRequest): Promise<AddMemberToProjectUseCaseResponse> {
    const project = await this.projectsRepository.findById(projectId)

    if (!project) {
      throw new ResourceNotFoundError()
    }

    const user = await this.usersRepository.findByEmail(userEmail)

    if (!user) {
      throw new UserDoesNotExistError()
    }

    await this.projectsRepository.addMember(projectId, userEmail)

    return {
      userEmail,
    }
  }
}
