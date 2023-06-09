import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Update Test Case (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to update a test case', async () => {
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

    const testCaseResponse = await request(app.server)
      .post('/test-cases')
      .set('Authorization', `Bearer ${token}`)
      .send({
        project_id: projectId,
        title: 'Test Case 1',
        status: 'open',
        description: 'Description of test case 1',
      })

    const testCaseId = testCaseResponse.body.test_case.id

    const deadline = new Date(Date.now() + 12096e5)

    const response = await request(app.server)
      .patch(`/test-cases/${testCaseId}/update`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        data: {
          title: 'Test Case 1 Updated',
          status: 'success',
          description: 'Description of test case 1 updated',
          deadline,
        },
      })

    expect(response.statusCode).toEqual(200)
    expect(response.body.testCase).toEqual(
      expect.objectContaining({
        id: testCaseId,
        title: 'Test Case 1 Updated',
        status: 'success',
        description: 'Description of test case 1 updated',
      }),
    )
    expect(new Date(response.body.testCase.deadline)).toStrictEqual(deadline)
  })
})
