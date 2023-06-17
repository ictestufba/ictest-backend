import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Get Project Members (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get the members of a project', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const createdProjectResponse = await request(app.server)
      .post('/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Project 1',
        code: 'PROJ1',
        description: 'Some description of project 1',
      })

    const projectId = createdProjectResponse.body.project.id

    const email = 'janedoe@example.com'

    await request(app.server).post('/users').send({
      name: 'Jane Doe',
      email,
      password: '123456',
    })

    await request(app.server)
      .patch(`/projects/${projectId}/add-member`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        userEmail: email,
      })

    const response = await request(app.server)
      .get(`/projects/${projectId}/members`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.users).toHaveLength(1)
    expect(response.body.users).toEqual([
      expect.objectContaining({
        name: 'Jane Doe',
        email,
      }),
    ])
  })
})
