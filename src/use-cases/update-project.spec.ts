import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { UpdateProjectUseCase } from './update-project'
import { expect, describe, it, beforeEach } from 'vitest'

let projectsRepository: InMemoryProjectsRepository
let sut: UpdateProjectUseCase

describe('Update Project Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    sut = new UpdateProjectUseCase(projectsRepository)
  })

  it('should be able to update a project', async () => {
    const newProject = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
    })

    const { project } = await sut.execute({
      projectId: newProject.id,
      data: {
        name: 'Project 1 updated',
      },
    })

    expect(project.name).toEqual('Project 1 updated')
  })

  it('should not be able to update a non-existing project', async () => {
    await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
    })

    await expect(() =>
      sut.execute({
        projectId: 'non-existing-id',
        data: {
          name: 'New name',
        },
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
