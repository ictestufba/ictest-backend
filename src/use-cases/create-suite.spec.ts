import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { InMemorySuitesRepository } from '@/repositories/in-memory/in-memory-suites-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { CreateSuiteUseCase } from './create-suite'
import { expect, describe, it, beforeEach } from 'vitest'

let projectsRepository: InMemoryProjectsRepository
let suitesRepository: InMemorySuitesRepository
let sut: CreateSuiteUseCase

describe('Update Project Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    suitesRepository = new InMemorySuitesRepository()
    sut = new CreateSuiteUseCase(projectsRepository, suitesRepository)
  })

  it('should be able to create a suite', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    const { suite } = await sut.execute({
      project_id: project.id,
      title: 'Suite 1',
      description: null,
      pre_conditions: null,
    })

    expect(suite.id).toEqual(expect.any(String))
  })

  it('should not be able to create a suite with a non-existing project', async () => {
    await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    await expect(() =>
      sut.execute({
        project_id: 'non-existing-project-id',
        title: 'Suite 1',
        description: null,
        pre_conditions: null,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
