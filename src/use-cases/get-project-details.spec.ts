import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { GetProjectDetailsUseCase } from './get-project-details'
import { expect, describe, it, beforeEach } from 'vitest'

let projectsRepository: InMemoryProjectsRepository
let sut: GetProjectDetailsUseCase

describe('Get Project Details Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    sut = new GetProjectDetailsUseCase(projectsRepository)
  })

  it('should be able to get project details', async () => {
    const createdProject = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    const { project } = await sut.execute({
      projectId: createdProject.id,
    })

    expect(project.name).toEqual('Project 1')
  })

  it('should not be able to get project details with wrong id', async () => {
    await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    expect(() =>
      sut.execute({
        projectId: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
