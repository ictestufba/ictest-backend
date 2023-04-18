import { Prisma, Project } from '@prisma/client'
import { ProjectsRepository } from '../projects-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryProjectsRepository implements ProjectsRepository {
  public items: Project[] = []

  async findById(id: string) {
    const project = this.items.find((item) => item.id === id)

    if (!project) {
      return null
    }

    return project
  }

  async create(data: Prisma.ProjectCreateInput) {
    const project = {
      id: data.id ?? randomUUID(),
      name: data.name,
      code: data.code,
      description: data.description ?? null,
      visibility: data.visibility ?? 'private',
      member_access: data.member_access ?? 'add_all',
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.items.push(project)

    return project
  }
}
