import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Unassign Test Case (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to unassign a test case', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const email = 'janedoe@example.com'
    const createUserResponse = await request(app.server).post('/users').send({
      name: 'Jane Doe',
      email,
      password: '123456',
    })

    const userId = createUserResponse.body.user.id

    const createProjectResponse = await request(app.server)
      .post('/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({
        userId,
        name: 'Project 1',
        code: 'PROJ1',
        description: 'Some description',
      })

    const projectId = createProjectResponse.body.project.id

    const createTestCaseResponse = await request(app.server)
      .post('/test-cases')
      .set('Authorization', `Bearer ${token}`)
      .send({
        project_id: projectId,
        title: 'Test Case 1',
        status: 'open',
        description: 'Description of test case 1',
      })

    const testCaseId = createTestCaseResponse.body.test_case.id

    const beforeUnassignResponse = await request(app.server)
      .patch(`/test-cases/${testCaseId}/assign`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        userEmail: email,
      })

    expect(beforeUnassignResponse.body.testCase.assigned_to).toBe(
      createUserResponse.body.user.id,
    )

    const response = await request(app.server)
      .patch(`/test-cases/${testCaseId}/unassign`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.body.testCase.assigned_to).toEqual(null)
  })
})
