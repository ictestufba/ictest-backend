import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { InMemorySuitesRepository } from '@/repositories/in-memory/in-memory-suites-repository'
import { InMemoryTestCasesRepository } from '@/repositories/in-memory/in-memory-test-cases-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { CreateTestCaseUseCase } from './create-test-case'
import { expect, describe, it, beforeEach } from 'vitest'

let projectsRepository: InMemoryProjectsRepository
let suitesRepository: InMemorySuitesRepository
let testCasesRepository: InMemoryTestCasesRepository
let sut: CreateTestCaseUseCase

describe('Create Test Case Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    suitesRepository = new InMemorySuitesRepository()
    testCasesRepository = new InMemoryTestCasesRepository()
    sut = new CreateTestCaseUseCase(
      projectsRepository,
      suitesRepository,
      testCasesRepository,
    )
  })

  it('should be able to create a test case', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    const suite = await suitesRepository.create({
      project_id: project.id,
      title: 'Suite 1',
      description: null,
      pre_conditions: null,
    })

    const { test_case } = await sut.execute({
      project_id: project.id,
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
    })

    expect(test_case.id).toEqual(expect.any(String))
    expect(test_case.status).toEqual('actual')
  })

  it('should not be able to create a test case with a non-existing project', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    const suite = await suitesRepository.create({
      project_id: project.id,
      title: 'Suite 1',
      description: null,
      pre_conditions: null,
    })

    await expect(() =>
      sut.execute({
        project_id: 'non-existing-project-id',
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
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })

  it('should not be able to create a test case with a non-existing suite', async () => {
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
        project_id: project.id,
        suite_id: 'non-existing-suite-id',
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
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
