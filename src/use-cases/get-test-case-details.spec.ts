import { InMemoryTestCasesRepository } from '@/repositories/in-memory/in-memory-test-cases-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { GetTestCaseDetailsUseCase } from './get-test-case-details'
import { expect, describe, it, beforeEach } from 'vitest'

let testCasesRepository: InMemoryTestCasesRepository
let sut: GetTestCaseDetailsUseCase

describe('Get Test Case Details Use Case', () => {
  beforeEach(() => {
    testCasesRepository = new InMemoryTestCasesRepository()
    sut = new GetTestCaseDetailsUseCase(testCasesRepository)
  })

  it('should be able to get test case details', async () => {
    const createdTestCase = await testCasesRepository.create({
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
      testCaseId: createdTestCase.id,
    })

    expect(testCase.title).toEqual('Test Case 1')
    expect(testCase.status).toEqual('open')
  })

  it('should not be able to get details from a non-existing test case', async () => {
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
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
