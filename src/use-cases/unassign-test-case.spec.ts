import { InMemoryTestCasesRepository } from '@/repositories/in-memory/in-memory-test-cases-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { UnassignTestCaseUseCase } from './unassign-test-case'
import { expect, describe, it, beforeEach } from 'vitest'

let testCasesRepository: InMemoryTestCasesRepository
let sut: UnassignTestCaseUseCase

describe('Unassign Test Case Use Case', () => {
  beforeEach(() => {
    testCasesRepository = new InMemoryTestCasesRepository()
    sut = new UnassignTestCaseUseCase(testCasesRepository)
  })

  it('should be able unassign a test case', async () => {
    const testCaseAssigned = await testCasesRepository.create({
      project_id: 'mock-project-id',
      title: 'Test Case 1',
      status: 'open',
      description: null,
      priority: 'not_set',
      automation_status: 'not_automated',
      behavior: 'not_set',
      layer: 'not_set',
      type: 'other',
      assigned_to: 'mock-user',
    })

    const { testCase } = await sut.execute({
      testCaseId: testCaseAssigned.id,
    })

    expect(testCase.assigned_to).toEqual(null)
  })

  it('should not be able to unassign a non-existing test case', async () => {
    await expect(() =>
      sut.execute({
        testCaseId: 'non-existing-test-case-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
