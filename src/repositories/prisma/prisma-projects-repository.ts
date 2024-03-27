import { prisma } from '@/lib/prisma'
import { Prisma, Role } from '@prisma/client'

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

    if (!project || project.is_deleted) return null

    return project
  }

  async list() {
    return prisma.project.findMany({
      where: { is_deleted: false },
      include: {
        members: {
          include: {
            user: true,
          },
        },
        test_cases: true,
      },
    })
  }

  async create(data: Prisma.ProjectCreateInput) {
    const project = await prisma.project.create({
      data: { ...data, is_deleted: false },
    })

    return project
  }

  async delete(projectId: string) {
    await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        is_deleted: true,
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

    if (!project || project.is_deleted) return null

    return project
  }

  async addMember(projectId: string, userId: string, role: Role) {
    await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        members: {
          create: {
            user_id: userId,
            role,
          },
        },
      },
    })
  }

  async removeMember(projectId: string, userId: string) {
    await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        members: {
          delete: {
            user_id_project_id: {
              user_id: userId,
              project_id: projectId,
            },
          },
        },
      },
    })
  }

  async getMemberIds(projectId: string): Promise<string[] | null> {
    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        members: true,
      },
    })

    if (!project || project.is_deleted) return null

    return project.members.map((user) => user.user_id)
  }
}
