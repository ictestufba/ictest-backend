import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { InMemorySuitesRepository } from '@/repositories/in-memory/in-memory-suites-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { DeleteSuiteUseCase } from './delete-suite'
import { expect, describe, it, beforeEach } from 'vitest'

let projectsRepository: InMemoryProjectsRepository
let suitesRepository: InMemorySuitesRepository
let sut: DeleteSuiteUseCase

describe('Delete Suite Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    suitesRepository = new InMemorySuitesRepository()
    sut = new DeleteSuiteUseCase(suitesRepository)
  })

  it('should be able to delete a suite', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    const suite1 = await suitesRepository.create({
      project_id: project.id,
      title: 'Suite 1',
      description: null,
      pre_conditions: null,
    })

    await suitesRepository.create({
      project_id: project.id,
      title: 'Suite 2',
      description: null,
      pre_conditions: null,
    })

    await sut.execute({
      suiteId: suite1.id,
    })

    const suites = await suitesRepository.getSuitesByProjectId(project.id)

    expect(suites).toHaveLength(1)
    expect(suites).toEqual([expect.objectContaining({ title: 'Suite 2' })])
  })

  it('should not be able to delete a non-existing suite', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    await suitesRepository.create({
      project_id: project.id,
      title: 'Suite 2',
      description: null,
      pre_conditions: null,
    })

    await expect(() =>
      sut.execute({
        suiteId: 'non-existing-suite-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
