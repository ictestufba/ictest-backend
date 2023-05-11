import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Update Suite (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to update a suite', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const createdProjectResponse = await request(app.server)
      .post('/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Project 1',
        code: 'PROJ1',
        description: 'Some description of project 1',
        visibility: 'private',
        member_access: 'add_all',
      })

    const projectId = createdProjectResponse.body.project.id

    const createdSuiteResponse = await request(app.server)
      .post('/suites')
      .set('Authorization', `Bearer ${token}`)
      .send({
        project_id: projectId,
        title: 'Suite 1',
        description: 'Description of suite 1',
        pre_conditions: 'Pre-conditions of suite 1',
      })

    const suiteId = createdSuiteResponse.body.suite.id

    const response = await request(app.server)
      .patch(`/suites/${suiteId}/update`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        data: {
          title: 'Suite 1 Updated',
          description: 'Description of suite 1 updated',
          pre_conditions: 'Pre-conditions of suite 1 updated',
        },
      })

    expect(response.statusCode).toEqual(200)
    expect(response.body.suite).toEqual(
      expect.objectContaining({
        id: suiteId,
        title: 'Suite 1 Updated',
        description: 'Description of suite 1 updated',
        pre_conditions: 'Pre-conditions of suite 1 updated',
        project_id: projectId,
      }),
    )
  })
})
