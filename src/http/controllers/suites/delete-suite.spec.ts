import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Delete Suite (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to delete a suite', async () => {
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

    const responseBeforeDelete = await request(app.server)
      .get(`/projects/${projectId}/suites`)
      .set('Authorization', `Bearer ${token}`)

    expect(responseBeforeDelete.body.suites).toHaveLength(1)

    await request(app.server)
      .delete(`/suites/${suiteId}`)
      .set('Authorization', `Bearer ${token}`)

    const responseAfterDelete = await request(app.server)
      .get(`/projects/${projectId}/suites`)
      .set('Authorization', `Bearer ${token}`)

    expect(responseAfterDelete.body.suites).toHaveLength(0)
  })
})
