import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { InMemorySuitesRepository } from '@/repositories/in-memory/in-memory-suites-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { GetSuitesFromProjectUseCase } from './get-suites-from-project'
import { expect, describe, it, beforeEach } from 'vitest'

let projectsRepository: InMemoryProjectsRepository
let suitesRepository: InMemorySuitesRepository
let sut: GetSuitesFromProjectUseCase

describe('Get Suites From Project Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    suitesRepository = new InMemorySuitesRepository()
    sut = new GetSuitesFromProjectUseCase(suitesRepository, projectsRepository)
  })

  it('should be able to get the suites from a specific project', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    await suitesRepository.create({
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

    const { suites } = await sut.execute({
      project_id: project.id,
    })

    expect(suites).toHaveLength(2)
    expect(suites).toEqual([
      expect.objectContaining({ title: 'Suite 1' }),
      expect.objectContaining({ title: 'Suite 2' }),
    ])
  })

  it('should be able to get the suites from a non-existing project', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    await suitesRepository.create({
      project_id: project.id,
      title: 'Suite 1',
      description: null,
      pre_conditions: null,
    })

    await expect(() =>
      sut.execute({
        project_id: 'non-existing-project-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})