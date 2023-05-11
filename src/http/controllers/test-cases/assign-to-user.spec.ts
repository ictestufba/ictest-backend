import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Assign Test Case To User (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to assign a test case to specific user', async () => {
    const { token } = await createAndAuthenticateUser(app)

    await request(app.server).post('/users').send({
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      password: '123456',
    })

    const createProjectResponse = await request(app.server)
      .post('/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Project 1',
        code: 'PROJ1',
        description: 'Some description',
        visibility: 'private',
        member_access: 'add_all',
      })

    const projectId = createProjectResponse.body.project.id

    const createSuiteResponse = await request(app.server)
      .post('/suites')
      .set('Authorization', `Bearer ${token}`)
      .send({
        project_id: projectId,
        title: 'Suite 1',
        description: 'Description of suite 1',
        pre_conditions: 'Pre-conditions of suite 1',
      })

    const suiteId = createSuiteResponse.body.suite.id

    const createTestCaseResponse = await request(app.server)
      .post('/test-cases')
      .set('Authorization', `Bearer ${token}`)
      .send({
        project_id: projectId,
        suite_id: suiteId,
        title: 'Test Case 1',
        status: 'actual',
        description: 'Description of test case 1',
        is_flaky: false,
      })

    const testCaseId = createTestCaseResponse.body.test_case.id

    await request(app.server)
      .patch(`/test-cases/${testCaseId}/assign`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        userEmail: 'janedoe@example.com',
      })

    const response = await request(app.server)
      .get(`/test-cases/${testCaseId}`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.body.testCase.assigned_to).toEqual(expect.any(String))
  })
})
