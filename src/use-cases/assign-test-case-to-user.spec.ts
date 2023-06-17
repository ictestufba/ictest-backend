import { InMemoryTestCasesRepository } from '@/repositories/in-memory/in-memory-test-cases-repository'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { UserDoesNotExistError } from './errors/user-does-not-exist-error'
import { AssignTestCaseToUserUseCase } from './assign-test-case-to-user'
import { expect, describe, it, beforeEach } from 'vitest'

let testCasesRepository: InMemoryTestCasesRepository
let usersRepository: InMemoryUsersRepository
let sut: AssignTestCaseToUserUseCase

describe('Assign Test Case To User Use Case', () => {
  beforeEach(() => {
    testCasesRepository = new InMemoryTestCasesRepository()
    usersRepository = new InMemoryUsersRepository()
    sut = new AssignTestCaseToUserUseCase(testCasesRepository, usersRepository)
  })

  it('should be able to assign a test case to a user', async () => {
    const testCase = await testCasesRepository.create({
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

    const user = await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: 'hashed-password',
    })

    await sut.execute({
      testCaseId: testCase.id,
      userEmail: user.email,
    })

    expect(testCase.assigned_to).toEqual(user.id)
  })

  it('should not be able to assign non-existing test case to a user', async () => {
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

    const user = await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: 'hashed-password',
    })

    await expect(() =>
      sut.execute({
        testCaseId: 'non-existing-test-case-id',
        userEmail: user.email,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })

  it('should not be able to assign a test case to a non-existing-user', async () => {
    const testCase = await testCasesRepository.create({
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

    await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: 'hashed-password',
    })

    await expect(() =>
      sut.execute({
        testCaseId: testCase.id,
        userEmail: 'non-existing-user-email',
      }),
    ).rejects.toBeInstanceOf(UserDoesNotExistError)
  })
})
