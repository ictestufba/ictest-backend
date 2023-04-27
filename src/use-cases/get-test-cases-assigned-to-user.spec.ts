import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { InMemoryTestCasesRepository } from '@/repositories/in-memory/in-memory-test-cases-repository'
import { UserDoesNotExistError } from './errors/user-does-not-exist-error'
import { GetTestCasesAssignedToUserUseCase } from './get-test-cases-assigned-to-user'
import { expect, describe, it, beforeEach } from 'vitest'

let usersRepository: InMemoryUsersRepository
let testCasesRepository: InMemoryTestCasesRepository
let sut: GetTestCasesAssignedToUserUseCase

describe('Get Test Cases Assigned To User Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    testCasesRepository = new InMemoryTestCasesRepository()
    sut = new GetTestCasesAssignedToUserUseCase(
      usersRepository,
      testCasesRepository,
    )
  })

  it('should be able to get the test cases assigned to a specific user', async () => {
    const user = await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: 'hashed-password',
    })

    const testCase1 = await testCasesRepository.create({
      project_id: 'mock-project-id',
      suite_id: 'mock-suite-id',
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

    const testCase2 = await testCasesRepository.create({
      project_id: 'mock-project-id',
      suite_id: 'mock-suite-id',
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

    await testCasesRepository.assignToUser(testCase1.id, user.email)
    await testCasesRepository.assignToUser(testCase2.id, user.email)

    const { testCases } = await sut.execute({
      userEmail: user.email,
    })

    expect(testCases).toHaveLength(2)
    expect(testCases).toEqual([
      expect.objectContaining({ title: 'Test Case 1' }),
      expect.objectContaining({ title: 'Test Case 2' }),
    ])
  })

  it('should not be able to get the test cases from a non-existing user', async () => {
    await expect(() =>
      sut.execute({
        userEmail: 'non-existing-user-email',
      }),
    ).rejects.toBeInstanceOf(UserDoesNotExistError)
  })
})
