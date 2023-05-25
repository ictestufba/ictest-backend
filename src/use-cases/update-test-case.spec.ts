import { InMemoryTestCasesRepository } from '@/repositories/in-memory/in-memory-test-cases-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { UpdateTestCaseUseCase } from './update-test-case'
import { expect, describe, it, beforeEach } from 'vitest'

let testCasesRepository: InMemoryTestCasesRepository
let sut: UpdateTestCaseUseCase

describe('Update Test Case Use Case', () => {
  beforeEach(() => {
    testCasesRepository = new InMemoryTestCasesRepository()
    sut = new UpdateTestCaseUseCase(testCasesRepository)
  })

  it('should be able to update a test case', async () => {
    const newTestCase = await testCasesRepository.create({
      project_id: 'mock-project-id',
      title: 'Test Case 1',
      status: 'open',
      description: null,
      priority: 'not_set',
      automation_status: 'not_automated',
      behavior: 'not_set',
      layer: 'not_set',
      type: 'other',
      assigned_to: null,
    })

    const { testCase } = await sut.execute({
      testCaseId: newTestCase.id,
      data: {
        title: 'Test Case 1 updated',
      },
    })

    expect(testCase.title).toEqual('Test Case 1 updated')
  })

  it('should not be able to update a non-existing test case', async () => {
    await testCasesRepository.create({
      project_id: 'mock-project-id',
      title: 'Test Case 1',
      status: 'open',
      description: null,
      priority: 'not_set',
      automation_status: 'not_automated',
      behavior: 'not_set',
      layer: 'not_set',
      type: 'other',
      assigned_to: null,
    })

    await expect(() =>
      sut.execute({
        testCaseId: 'non-existing-test-case-id',
        data: {
          title: 'New title',
        },
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
