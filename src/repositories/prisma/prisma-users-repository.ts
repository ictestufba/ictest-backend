import { prisma } from '@/lib/prisma'
import { Prisma, User } from '@prisma/client'

import { UsersRepository } from '../users-repository'

export class PrismaUsersRepository implements UsersRepository {
  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async findByPartialEmail(email: string) {
    const users = (await prisma.user.findMany({
      where: {
        email: {
          contains: email,
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        created_at: true,
        password_hash: false,
      },
    })) as User[]

    return users
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
