import { ProjectsRepository } from '@/repositories/projects-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
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
      if (user)
        users.push({
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          created_at: user.created_at,
        } as User)
    }

    return { users }
  }
}
