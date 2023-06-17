import { Prisma, Project } from '@prisma/client'
import { ProjectsRepository } from '../projects-repository'
import { randomUUID } from 'node:crypto'

type ProjectWithMembers = Project & { members: string[] }

export class InMemoryProjectsRepository implements ProjectsRepository {
  public items: ProjectWithMembers[] = []

  async findById(id: string) {
    const project = this.items.find((item) => item.id === id)

    if (!project || project.is_deleted) return null

    return project
  }

  async create(data: Prisma.ProjectCreateInput) {
    const project = {
      id: data.id ?? randomUUID(),
      name: data.name,
      code: data.code,
      description: data.description ?? null,
      members: [],
      created_at: new Date(),
      updated_at: new Date(),
      is_deleted: false,
    }

    this.items.push(project)

    return project
  }

  async list() {
    return this.items.filter((project) => project.is_deleted === false)
  }

  async findByIdAndDelete(projectId: string) {
    const index = this.items.findIndex((project) => project.id === projectId)

    this.items[index].is_deleted = true
  }

  async findByIdAndUpdate(projectId: string, data: Partial<Project>) {
    const index = this.items.findIndex((project) => project.id === projectId)

    if (index === -1 || this.items[index].is_deleted) return null

    this.items[index] = { ...this.items[index], ...data }

    return this.items[index]
  }

  async addMember(projectId: string, userId: string) {
    const index = this.items.findIndex((project) => project.id === projectId)

    this.items[index].members.push(userId)
  }

  async getMemberIds(projectId: string) {
    const project = this.items.find((item) => item.id === projectId)

    if (!project || project.is_deleted) return null

    return project.members
  }
}
