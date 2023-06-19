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
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
    })

    await sut.execute({
      projectId: project.id,
    })

    const result = await projectsRepository.findById(project.id)

    expect(result).toBeNull()
  })

  it('should not be able to delete a non-existing project', async () => {
    await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
    })

    await expect(() =>
      sut.execute({
        projectId: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
