import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { InMemoryTestCasesRepository } from '@/repositories/in-memory/in-memory-test-cases-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { GetTestCasesFromProjectUseCase } from './get-test-cases-from-project'
import { expect, describe, it, beforeEach } from 'vitest'

let projectsRepository: InMemoryProjectsRepository
let testCasesRepository: InMemoryTestCasesRepository
let sut: GetTestCasesFromProjectUseCase

describe('Get Test Cases From Project Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    testCasesRepository = new InMemoryTestCasesRepository()
    sut = new GetTestCasesFromProjectUseCase(
      projectsRepository,
      testCasesRepository,
    )
  })

  it('should be able to get the test cases from a specific project', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
    })

    await testCasesRepository.create({
      project_id: project.id,
      title: 'Test Case 1',
      status: 'open',
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
      status: 'open',
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
      projectId: project.id,
    })

    expect(testCases).toHaveLength(2)
    expect(testCases).toEqual([
      expect.objectContaining({ title: 'Test Case 1' }),
      expect.objectContaining({ title: 'Test Case 2' }),
    ])
  })

  it('should not be able to get the test cases from a non-existing project', async () => {
    await expect(() =>
      sut.execute({
        projectId: 'non-existing-project-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
