import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Test Case Details (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get the details of a test case', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const projectResponse = await request(app.server)
      .post('/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Project 1',
        code: 'PROJ1',
        description: 'Some description',
        visibility: 'private',
        member_access: 'add_all',
      })

    const projectId = projectResponse.body.project.id

    const testCaseResponse = await request(app.server)
      .post('/test-cases')
      .set('Authorization', `Bearer ${token}`)
      .send({
        project_id: projectId,
        title: 'Test Case 1',
        status: 'open',
        description: 'Description of test case 1',
        is_flaky: false,
      })

    const testCaseId = testCaseResponse.body.test_case.id

    const response = await request(app.server)
      .get(`/test-cases/${testCaseId}`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.testCase).toEqual(
      expect.objectContaining({
        title: 'Test Case 1',
        status: 'open',
        description: 'Description of test case 1',
      }),
    )
  })
})
