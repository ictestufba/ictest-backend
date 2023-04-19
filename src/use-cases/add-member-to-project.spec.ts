import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { UserDoesNotExistError } from './errors/user-does-not-exist-error'
import { AddMemberToProjectUseCase } from './add-member-to-project'
import { expect, describe, it, beforeEach } from 'vitest'

let projectsRepository: InMemoryProjectsRepository
let usersRepository: InMemoryUsersRepository
let sut: AddMemberToProjectUseCase

describe('Update Project Use Case', () => {
  beforeEach(() => {
    projectsRepository = new InMemoryProjectsRepository()
    usersRepository = new InMemoryUsersRepository()
    sut = new AddMemberToProjectUseCase(projectsRepository, usersRepository)
  })

  it('should be able to add a member to project', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    const user1 = await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: 'hashed-password',
    })

    const user2 = await usersRepository.create({
      name: 'Fulano',
      email: 'fulano@example.com',
      password_hash: 'hashed-password',
    })

    await sut.execute({
      projectId: project.id,
      userEmail: user1.email,
    })

    await sut.execute({
      projectId: project.id,
      userEmail: user2.email,
    })

    expect(project.members).toEqual([user1.email, user2.email])
  })

  it('should not be able to add a member to a non-existing project', async () => {
    await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    const user = await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: 'hashed-password',
    })

    await expect(() =>
      sut.execute({
        projectId: 'non-existing-project-id',
        userEmail: user.email,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })

  it('should not be able to add a non-existing member to project', async () => {
    const project = await projectsRepository.create({
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
      visibility: 'private',
      member_access: 'add_all',
    })

    await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: 'hashed-password',
    })

    await expect(() =>
      sut.execute({
        projectId: project.id,
        userEmail: 'non-existing-user-email',
      }),
    ).rejects.toBeInstanceOf(UserDoesNotExistError)
  })
})
