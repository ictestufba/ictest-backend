import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { InMemoryTestCasesRepository } from '@/repositories/in-memory/in-memory-test-cases-repository'
import { UserDoesNotExistError } from './errors/user-does-not-exist-error'
import { GetTestCasesByUserUseCase } from './get-test-cases-by-user'
import { expect, describe, it, beforeEach } from 'vitest'

let testCasesRepository: InMemoryTestCasesRepository
let usersRepository: InMemoryUsersRepository
let sut: GetTestCasesByUserUseCase

describe('Get Test Cases By User Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    testCasesRepository = new InMemoryTestCasesRepository()
    sut = new GetTestCasesByUserUseCase(testCasesRepository, usersRepository)
  })

  it('should be able to get the test cases assigned to a specific user', async () => {
    const user = await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: 'hashed-password',
    })

    const testCase1 = await testCasesRepository.create({
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

    await testCasesRepository.create({
      project_id: 'mock-project-id',
      title: 'Test Case 2',
      status: 'open',
      description: null,
      priority: 'not_set',
      automation_status: 'not_automated',
      behavior: 'not_set',
      layer: 'not_set',
      type: 'other',
      assigned_to: null,
    })

    const testCase3 = await testCasesRepository.create({
      project_id: 'mock-project-id',
      title: 'Test Case 3',
      status: 'open',
      description: null,
      priority: 'not_set',
      automation_status: 'not_automated',
      behavior: 'not_set',
      layer: 'not_set',
      type: 'other',
      assigned_to: null,
    })

    await testCasesRepository.assignToUser(testCase1.id, user.id)
    await testCasesRepository.assignToUser(testCase3.id, user.id)

    await testCasesRepository.delete(testCase3.id)

    const { testCases } = await sut.execute({
      userEmail: user.email,
    })

    expect(testCases).toHaveLength(1)
    expect(testCases[0].title).toEqual('Test Case 1')
  })

  it('should not be able to get the test cases from a non-existing user', async () => {
    await expect(() =>
      sut.execute({
        userEmail: 'non-existing-user-email',
      }),
    ).rejects.toBeInstanceOf(UserDoesNotExistError)
  })
})
