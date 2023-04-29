import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('List Projects (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to list the projects', async () => {
    const { token } = await createAndAuthenticateUser(app)

    await request(app.server)
      .post('/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Project 1',
        code: 'PROJ1',
        description: 'Some description of project 1',
        visibility: 'private',
        member_access: 'add_all',
      })

    await request(app.server)
      .post('/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Project 2',
        code: 'PROJ2',
        description: 'Some description of project 2',
        visibility: 'private',
        member_access: 'add_all',
      })

    const response = await request(app.server)
      .get('/projects')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.projects).toHaveLength(2)
    expect(response.body.projects).toEqual([
      expect.objectContaining({
        name: 'Project 1',
      }),
      expect.objectContaining({
        name: 'Project 2',
      }),
    ])
  })
})