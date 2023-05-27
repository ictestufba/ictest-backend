import { Prisma, Project } from '@prisma/client'

export interface ProjectsRepository {
  findById(id: string): Promise<Project | null>
  create(data: Prisma.ProjectCreateInput): Promise<Project>
  list(): Promise<Project[]>
  findByIdAndDelete(projectId: string): Promise<void>
  findByIdAndUpdate(
    projectId: string,
    data: Prisma.ProjectUpdateInput,
  ): Promise<Project | null>
  addMember(projectId: string, userId: string): Promise<string | null>
}
