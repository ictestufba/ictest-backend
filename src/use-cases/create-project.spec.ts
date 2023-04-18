import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { CreateProjectUseCase } from './create-project'

let projectsRepository: InMemoryProjectsRepository
let sut: CreateProjectUseCase

describe('Create Project Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    sut = new CreateProjectUseCase(projectsRepository)
  })

  it('should be able to create a project', async () => {
    const { project } = await sut.execute({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    expect(project.id).toEqual(expect.any(String))
  })
})
