import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Delete Test Case (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to delete a test case', async () => {
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

    const createdTestCaseResponse = await request(app.server)
      .post('/test-cases')
      .set('Authorization', `Bearer ${token}`)
      .send({
        project_id: projectId,
        title: 'Test Case 1',
        status: 'aberto',
        description: 'Description of test case 1',
        is_flaky: false,
      })

    const testCaseId = createdTestCaseResponse.body.test_case.id

    const responseBeforeDelete = await request(app.server)
      .get(`/projects/${projectId}/test-cases`)
      .set('Authorization', `Bearer ${token}`)

    expect(responseBeforeDelete.body.testCases).toHaveLength(1)

    await request(app.server)
      .delete(`/test-cases/${testCaseId}`)
      .set('Authorization', `Bearer ${token}`)

    const responseAfterDelete = await request(app.server)
      .get(`/projects/${projectId}/test-cases`)
      .set('Authorization', `Bearer ${token}`)

    expect(responseAfterDelete.body.testCases).toHaveLength(0)
  })
})
