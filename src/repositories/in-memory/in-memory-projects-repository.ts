import { Prisma, Project } from '@prisma/client'
import { ProjectsRepository } from '../projects-repository'
import { randomUUID } from 'node:crypto'

type ProjectWithMembers = Project & { members: string[] }

export class InMemoryProjectsRepository implements ProjectsRepository {
  public items: ProjectWithMembers[] = []

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
      members: [],
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.items.push(project)

    return project
  }

  async list() {
    const projects = this.items

    return projects
  }

  async findByIdAndDelete(projectId: string) {
    this.items = this.items.filter((item) => item.id !== projectId)
  }

  async findByIdAndUpdate(projectId: string, data: Partial<Project>) {
    const index = this.items.findIndex((project) => project.id === projectId)

    if (index === -1) {
      return null
    }

    this.items[index] = { ...this.items[index], ...data }

    return this.items[index]
  }

  async addMember(projectId: string, userId: string) {
    const index = this.items.findIndex((project) => project.id === projectId)

    if (index === -1) {
      return null
    }

    this.items[index].members.push(userId)

    return userId
  }
}
