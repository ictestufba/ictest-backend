import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Add Member To Project (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to add a member to specific project', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const createUserResponse = await request(app.server).post('/users').send({
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      password: '123456',
    })

    const userId = createUserResponse.body.user.id

    const createdProjectResponse = await request(app.server)
      .post('/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({
        userId,
        name: 'Project 1',
        code: 'PROJ1',
        description: 'Some description of project 1',
      })

    const projectId = createdProjectResponse.body.project.id

    const userToAdd = await request(app.server).post('/users').send({
      name: 'Jane Doe 2',
      email: '2-janedoe@example.com',
      password: '123456',
    })

    const response = await request(app.server)
      .patch(`/projects/${projectId}/add-member`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        userEmail: '2-janedoe@example.com',
      })

    expect(response.statusCode).toEqual(200)

    const projectDetailsResponse = await request(app.server)
      .get(`/projects/${projectId}`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(projectDetailsResponse.body.project).toEqual(
      expect.objectContaining({
        id: projectId,
        members: expect.arrayContaining([
          expect.objectContaining({
            project_id: projectId,
            role: 'member',
            user_id: userToAdd.body.user.id,
          }),
        ]),
      }),
    )
  })
})
