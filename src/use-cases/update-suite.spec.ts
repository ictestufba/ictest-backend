import { InMemorySuitesRepository } from '@/repositories/in-memory/in-memory-suites-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { UpdateSuiteUseCase } from './update-suite'
import { expect, describe, it, beforeEach } from 'vitest'

let suitesRepository: InMemorySuitesRepository
let sut: UpdateSuiteUseCase

describe('Update Suite Use Case', () => {
  beforeEach(() => {
    suitesRepository = new InMemorySuitesRepository()
    sut = new UpdateSuiteUseCase(suitesRepository)
  })

  it('should be able to update a suite', async () => {
    const newSuite = await suitesRepository.create({
      title: 'Suite 1',
    })

    const { suite } = await sut.execute({
      suiteId: newSuite.id,
      data: {
        title: 'Suite 1 updated',
        pre_conditions: 'added-pre-conditions',
      },
    })

    expect(suite.title).toEqual('Suite 1 updated')
    expect(suite.pre_conditions).toEqual('added-pre-conditions')
  })

  it('should not be able to update a non-existing suite', async () => {
    await suitesRepository.create({
      title: 'Suite 1',
    })

    await expect(() =>
      sut.execute({
        suiteId: 'non-existing-suite-id',
        data: {
          title: 'New title',
        },
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
