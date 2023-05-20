import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { InMemoryTestCasesRepository } from '@/repositories/in-memory/in-memory-test-cases-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { DeleteTestCaseUseCase } from './delete-test-case'
import { expect, describe, it, beforeEach } from 'vitest'

let projectsRepository: InMemoryProjectsRepository
let testCasesRepository: InMemoryTestCasesRepository
let sut: DeleteTestCaseUseCase

describe('Delete Test Case Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    testCasesRepository = new InMemoryTestCasesRepository()
    sut = new DeleteTestCaseUseCase(testCasesRepository)
  })

  it('should be able to delete a test case', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    const testCase1 = await testCasesRepository.create({
      project_id: project.id,
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
      project_id: project.id,
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

    await sut.execute({
      testCaseId: testCase1.id,
    })

    const testCases = await testCasesRepository.getTestCasesByProjectId(
      project.id,
    )

    expect(testCases).toHaveLength(1)
    expect(testCases).toEqual([
      expect.objectContaining({ title: 'Test Case 2' }),
    ])
  })

  it('should not be able to delete a non-existing test case', async () => {
    await expect(() =>
      sut.execute({
        testCaseId: 'non-existing-test-case-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
