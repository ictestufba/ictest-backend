import { InMemorySuitesRepository } from '@/repositories/in-memory/in-memory-suites-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { GetSuiteDetailsUseCase } from './get-suite-details'
import { expect, describe, it, beforeEach } from 'vitest'

let suitesRepository: InMemorySuitesRepository
let sut: GetSuiteDetailsUseCase

describe('Get Suite Details Use Case', () => {
  beforeEach(() => {
    suitesRepository = new InMemorySuitesRepository()
    sut = new GetSuiteDetailsUseCase(suitesRepository)
  })

  it('should be able to get suite details', async () => {
    const createdSuite = await suitesRepository.create({
      project_id: 'project-id',
      title: 'Suite 1',
      description: null,
      pre_conditions: null,
    })

    const { suite } = await sut.execute({
      suiteId: createdSuite.id,
    })

    expect(suite.project_id).toEqual('project-id')
    expect(suite.title).toEqual('Suite 1')
  })

  it('should not be able to get details from a non-existing suite', async () => {
    await suitesRepository.create({
      project_id: 'project-id',
      title: 'Suite 1',
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
