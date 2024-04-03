import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'

interface GetUsersByPartialEmailUseCaseRequest {
  email: string
}

interface GetUsersByPartialEmailUseCaseResponse {
  users: User[]
}

export class GetUsersByPartialEmailUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
  }: GetUsersByPartialEmailUseCaseRequest): Promise<GetUsersByPartialEmailUseCaseResponse> {
    const users = await this.usersRepository.findByPartialEmail(email)

    return { users }
  }
}
