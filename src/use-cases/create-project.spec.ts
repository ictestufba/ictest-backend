import { InMemoryProjectsRepository } from '@/repositories/in-memory/in-memory-projects-repository'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'

import { expect, describe, it, beforeEach } from 'vitest'
import { CreateProjectUseCase } from './create-project'

let projectsRepository: InMemoryProjectsRepository
let usersRepository: InMemoryUsersRepository
let sut: CreateProjectUseCase

describe('Create Project Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    projectsRepository = new InMemoryProjectsRepository()
    sut = new CreateProjectUseCase(projectsRepository)
  })

  it('should be able to create a project', async () => {
    const user = await usersRepository.create({
      id: 'user-1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: 'hashed-password',
    })

    const userId = user.id

    const { project } = await sut.execute({
      userId,
      name: 'Project 1',
      code: 'PROJ1',
      description: null,
    })

    expect(project.id).toEqual(expect.any(String))
  })
})
