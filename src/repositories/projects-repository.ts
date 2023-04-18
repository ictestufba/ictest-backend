import { Prisma, Project } from '@prisma/client'

export interface ProjectsRepository {
  findById(id: string): Promise<Project | null>
  create(data: Prisma.ProjectCreateInput): Promise<Project>
  list(): Promise<Project[]>
  findByIdAndDelete(projectId: string): Promise<void>
}
