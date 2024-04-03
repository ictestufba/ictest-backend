import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { InMemoryTestCasesRepository } from '@/repositories/in-memory/in-memory-test-cases-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateTestCaseUseCase } from './create-test-case'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

let projectsRepository: InMemoryProjectsRepository
let testCasesRepository: InMemoryTestCasesRepository
let sut: CreateTestCaseUseCase

describe('Create Test Case Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    testCasesRepository = new InMemoryTestCasesRepository()
    sut = new CreateTestCaseUseCase(projectsRepository, testCasesRepository)
  })

  it('should be able to create a test case', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
    })

    const { test_case } = await sut.execute({
      project_id: project.id,
      title: 'Test Case 1',
      status: 'open',
      description: null,
      priority: 'not_set',
      automation_status: 'not_automated',
      deadline: new Date(Date.now() + 12096e5),
      behavior: 'not_set',
      layer: 'not_set',
      type: 'other',
      attachment: null,
    })

    expect(test_case.id).toEqual(expect.any(String))
    expect(test_case.status).toEqual('open')
  })

  it('should not be able to create a test case with a non-existing project', async () => {
    await expect(() =>
      sut.execute({
        project_id: 'non-existing-project-id',
        title: 'Test Case 1',
        status: 'open',
        description: null,
        priority: 'not_set',
        automation_status: 'not_automated',
        deadline: new Date(Date.now() + 12096e5),
        behavior: 'not_set',
        layer: 'not_set',
        type: 'other',
        attachment: null,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
