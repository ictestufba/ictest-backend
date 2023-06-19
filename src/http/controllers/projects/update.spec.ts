import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Update Project (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to update a project', async () => {
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

    const response = await request(app.server)
      .patch(`/projects/${projectId}/update`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        data: {
          name: 'Project 1 Updated',
          code: 'PROJ1A',
          description: 'Some description of project 1 updated',
        },
      })

    expect(response.statusCode).toEqual(200)
    expect(response.body.project).toEqual(
      expect.objectContaining({
        id: projectId,
        name: 'Project 1 Updated',
        code: 'PROJ1A',
        description: 'Some description of project 1 updated',
      }),
    )
  })
})
