import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

import { ProjectsRepository } from '../projects-repository'

export class PrismaProjectsRepository implements ProjectsRepository {
  async findById(id: string) {
    const project = await prisma.project.findUnique({
      where: {
        id,
      },
      include: {
        members: true,
      },
    })

    return project
  }

  async create(data: Prisma.ProjectCreateInput) {
    const project = await prisma.project.create({
      data,
    })

    return project
  }

  async list() {
    const projects = await prisma.project.findMany()

    return projects
  }

  async findByIdAndDelete(projectId: string) {
    await prisma.project.delete({
      where: {
        id: projectId,
      },
    })
  }

  async findByIdAndUpdate(projectId: string, data: Prisma.ProjectUpdateInput) {
    const project = await prisma.project.update({
      where: {
        id: projectId,
      },
      data,
    })

    return project
  }

  async addMember(projectId: string, userEmail: string) {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    })

    if (!user) {
      return null
    }

    const userId = user?.id

    await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        members: {
          create: {
            user_id: userId,
            role: 'member',
          },
        },
      },
    })

    return userEmail
  }
}
