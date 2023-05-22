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

    const testCaseResponse = await request(app.server)
      .post('/test-cases')
      .set('Authorization', `Bearer ${token}`)
      .send({
        project_id: projectId,
        title: 'Test Case 1',
        status: 'aberto',
        description: 'Description of test case 1',
        is_flaky: false,
      })

    const testCaseId = testCaseResponse.body.test_case.id

    const response = await request(app.server)
      .patch(`/test-cases/${testCaseId}/update`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        data: {
          title: 'Test Case 1 Updated',
          // status: 'sucesso',
          description: 'Description of test case 1 updated',
          is_flaky: true,
        },
      })

    expect(response.statusCode).toEqual(200)
    expect(response.body.testCase).toEqual(
      expect.objectContaining({
        id: testCaseId,
        title: 'Test Case 1 Updated',
        // status: 'sucesso',
        description: 'Description of test case 1 updated',
        is_flaky: true,
      }),
    )
  })
})
