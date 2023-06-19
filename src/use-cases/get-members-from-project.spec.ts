import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { GetMembersFromProjectUseCase } from './get-members-from-project'
import { expect, describe, it, beforeEach } from 'vitest'

let projectsRepository: InMemoryProjectsRepository
let usersRepository: InMemoryUsersRepository
let sut: GetMembersFromProjectUseCase

describe('Get Members From Project Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    usersRepository = new InMemoryUsersRepository()
    sut = new GetMembersFromProjectUseCase(projectsRepository, usersRepository)
  })

  it('should be able to get the members from a specific project', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
    })

    const user1 = await usersRepository.create({
      id: 'user-1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: 'hashed-password',
    })

    const user2 = await usersRepository.create({
      id: 'mock-user-2',
      name: 'Fulano',
      email: 'fulano@example.com',
      password_hash: 'hashed-password',
    })

    await projectsRepository.addMember(project.id, user1.id)

    await projectsRepository.addMember(project.id, user2.id)

    const { users } = await sut.execute({ projectId: project.id })

    expect(users).toHaveLength(2)
    expect(users[0].email).toBe(user1.email)
    expect(users[1].email).toBe(user2.email)
  })

  it('should not be able to get the members from a non-existing project', async () => {
    await expect(() =>
      sut.execute({
        projectId: 'non-existing-project-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })

  it('should not be able to get the members from a deleted project', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
    })

    const user1 = await usersRepository.create({
      id: 'user-1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: 'hashed-password',
    })

    await projectsRepository.addMember(project.id, user1.id)

    await projectsRepository.delete(project.id)

    await expect(() =>
      sut.execute({
        projectId: 'non-existing-project-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
