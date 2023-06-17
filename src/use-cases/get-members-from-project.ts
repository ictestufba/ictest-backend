import { User } from '@prisma/client'
import { UsersRepository } from '@/repositories/users-repository'
import { ProjectsRepository } from '@/repositories/projects-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetMembersFromProjectUseCaseRequest {
  projectId: string
}

interface GetMembersFromProjectUseCaseResponse {
  users: User[]
}

export class GetMembersFromProjectUseCase {
  constructor(
    private projectsRepository: ProjectsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    projectId,
  }: GetMembersFromProjectUseCaseRequest): Promise<GetMembersFromProjectUseCaseResponse> {
    const response = await this.projectsRepository.getMemberIds(projectId)

    if (!response) {
      throw new ResourceNotFoundError()
    }

    const users: User[] = []

    for (let i = 0; i < response.length; i++) {
      const user = await this.usersRepository.findById(response[i])
      if (user) users.push(user)
    }

    return { users }
  }
}
