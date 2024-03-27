import { ProjectsRepository } from '@/repositories/projects-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { UserDoesNotExistError } from './errors/user-does-not-exist-error'

interface RemoveMemberFromProjectUseCaseRequest {
  projectId: string
  userId: string
}

export class RemoveMemberFromProjectUseCase {
  constructor(
    private projectsRepository: ProjectsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({ projectId, userId }: RemoveMemberFromProjectUseCaseRequest) {
    const project = await this.projectsRepository.findById(projectId)

    if (!project) {
      throw new ResourceNotFoundError()
    }

    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new UserDoesNotExistError()
    }

    return await this.projectsRepository.removeMember(projectId, userId)
  }
}
