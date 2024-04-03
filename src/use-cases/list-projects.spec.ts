import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { ListProjectsUseCase } from './list-projects'

let projectsRepository: InMemoryProjectsRepository
let sut: ListProjectsUseCase

describe('List Project Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    sut = new ListProjectsUseCase(projectsRepository)
  })

  it('should be able to list non-deleted projects', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
    })

    await projectsRepository.create({
      name: 'Project 2',
      code: 'PROJ2',
      description: null,
    })

    await projectsRepository.create({
      name: 'Project 3',
      code: 'PROJ3',
      description: null,
    })

    await projectsRepository.delete(project.id)

    const { projects } = await sut.execute()

    expect(projects).toHaveLength(2)
    expect(projects).toEqual([
      expect.objectContaining({ name: 'Project 2' }),
      expect.objectContaining({ name: 'Project 3' }),
    ])
  })
})
