import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Get Project Test Cases (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get the test cases of a project', async () => {
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

    const createdTestCaseResponse = await request(app.server)
      .post('/test-cases')
      .set('Authorization', `Bearer ${token}`)
      .send({
        project_id: projectId,
        title: 'Test Case 1',
        status: 'open',
        description: 'Description of test case 1',
        is_flaky: false,
      })

    const testCaseId = createdTestCaseResponse.body.test_case.id

    const response = await request(app.server)
      .get(`/projects/${projectId}/test-cases`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.testCases).toHaveLength(1)
    expect(response.body.testCases).toEqual([
      expect.objectContaining({
        id: testCaseId,
        title: 'Test Case 1',
      }),
    ])
  })
})
