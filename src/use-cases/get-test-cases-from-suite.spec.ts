import { InMemorySuitesRepository } from '@/repositories/in-memory/in-memory-suites-repository'
import { InMemoryTestCasesRepository } from '@/repositories/in-memory/in-memory-test-cases-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { GetTestCasesFromSuiteUseCase } from './get-test-cases-from-suite'
import { expect, describe, it, beforeEach } from 'vitest'

let suitesRepository: InMemorySuitesRepository
let testCasesRepository: InMemoryTestCasesRepository
let sut: GetTestCasesFromSuiteUseCase

describe('Get Test Cases From Suite Use Case', () => {
  beforeEach(() => {
    suitesRepository = new InMemorySuitesRepository()
    testCasesRepository = new InMemoryTestCasesRepository()
    sut = new GetTestCasesFromSuiteUseCase(
      suitesRepository,
      testCasesRepository,
    )
  })

  it('should be able to get the test cases from a specific suite', async () => {
    const suite = await suitesRepository.create({
      project_id: 'mock-project-id',
      title: 'Suite 1',
      description: null,
      pre_conditions: null,
    })

    await testCasesRepository.create({
      project_id: 'mock-project-id',
      suite_id: suite.id,
      title: 'Test Case 1',
      status: 'actual',
      description: null,
      pre_conditions: null,
      post_conditions: null,
      severity: 'not_set',
      priority: 'not_set',
      automation_status: 'not_automated',
      behavior: 'not_set',
      is_flaky: false,
      layer: 'not_set',
      type: 'other',
      assigned_to: null,
    })

    await testCasesRepository.create({
      project_id: 'mock-project-id',
      suite_id: suite.id,
      title: 'Test Case 2',
      status: 'actual',
      description: null,
      pre_conditions: null,
      post_conditions: null,
      severity: 'not_set',
      priority: 'not_set',
      automation_status: 'not_automated',
      behavior: 'not_set',
      is_flaky: false,
      layer: 'not_set',
      type: 'other',
      assigned_to: null,
    })

    const { testCases } = await sut.execute({
      suiteId: suite.id,
    })

    expect(testCases).toHaveLength(2)
    expect(testCases).toEqual([
      expect.objectContaining({ title: 'Test Case 1' }),
      expect.objectContaining({ title: 'Test Case 2' }),
    ])
  })

  it('should not be able to get the test cases from a non-existing suite', async () => {
    const suite = await suitesRepository.create({
      project_id: 'mock-project-id',
      title: 'Suite 1',
      description: null,
      pre_conditions: null,
    })

    await testCasesRepository.create({
      project_id: 'mock-project-id',
      suite_id: suite.id,
      title: 'Test Case 2',
      status: 'actual',
      description: null,
      pre_conditions: null,
      post_conditions: null,
      severity: 'not_set',
      priority: 'not_set',
      automation_status: 'not_automated',
      behavior: 'not_set',
      is_flaky: false,
      layer: 'not_set',
      type: 'other',
      assigned_to: null,
    })

    await expect(() =>
      sut.execute({
        suiteId: 'non-existing-suite-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
