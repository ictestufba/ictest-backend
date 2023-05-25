import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { ListProjectsUseCase } from './list-projects'

let projectsRepository: InMemoryProjectsRepository
let sut: ListProjectsUseCase

describe('Create Project Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    sut = new ListProjectsUseCase(projectsRepository)
  })

  it('should be able to list projects', async () => {
    await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
    })

    await projectsRepository.create({
      name: 'Project 2',
      code: 'PROJ2',
      description: null,
    })

    const { projects } = await sut.execute()

    expect(projects).toHaveLength(2)
    expect(projects).toEqual([
      expect.objectContaining({ name: 'Project 1' }),
      expect.objectContaining({ name: 'Project 2' }),
    ])
  })
})
