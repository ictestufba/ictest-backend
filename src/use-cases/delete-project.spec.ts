import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { DeleteProjectUseCase } from './delete-project'
import { expect, describe, it, beforeEach } from 'vitest'

let projectsRepository: InMemoryProjectsRepository
let sut: DeleteProjectUseCase

describe('Delete Project Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    sut = new DeleteProjectUseCase(projectsRepository)
  })

  it('should be able to delete a project', async () => {
    await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    const project = await projectsRepository.create({
      name: 'Project 2',
      code: 'PROJ2',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    await projectsRepository.create({
      name: 'Project 3',
      code: 'PROJ3',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    await sut.execute({
      projectId: project.id,
    })

    const projects = await projectsRepository.list()

    expect(projects).toHaveLength(2)
    expect(projects).toEqual([
      expect.objectContaining({ name: 'Project 1' }),
      expect.objectContaining({ name: 'Project 3' }),
    ])
  })

  it('should not be able to delete a non-existing project', async () => {
    await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    await expect(() =>
      sut.execute({
        projectId: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
