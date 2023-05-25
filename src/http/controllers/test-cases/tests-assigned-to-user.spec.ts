import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Get Test Cases by User (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get the test cases by user', async () => {
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

    const createTestCaseResponse1 = await request(app.server)
      .post('/test-cases')
      .set('Authorization', `Bearer ${token}`)
      .send({
        project_id: projectId,
        title: 'Test Case 1',
        status: 'draft',
        description: 'Description of test case 1',
        is_flaky: false,
      })

    const testCaseId1 = createTestCaseResponse1.body.test_case.id

    await request(app.server)
      .post('/test-cases')
      .set('Authorization', `Bearer ${token}`)
      .send({
        project_id: projectId,
        title: 'Test Case 2',
        status: 'draft',
        description: 'Description of test case 2',
        is_flaky: false,
      })

    const createTestCaseResponse3 = await request(app.server)
      .post('/test-cases')
      .set('Authorization', `Bearer ${token}`)
      .send({
        project_id: projectId,
        title: 'Test Case 3',
        status: 'draft',
        description: 'Description of test case 3',
        is_flaky: false,
      })

    const testCaseId3 = createTestCaseResponse3.body.test_case.id

    await request(app.server)
      .patch(`/test-cases/${testCaseId1}/assign`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        userEmail: 'johndoe@example.com',
      })

    await request(app.server)
      .patch(`/test-cases/${testCaseId3}/assign`)
      .set('Authorization', `Bearer ${token}`)
      .send({ userEmail: 'johndoe@example.com' })

    const userEmail = 'johndoe@example.com'

    const responseToAssign = await request(app.server)
      .get(`/test-cases/${testCaseId1}`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(responseToAssign.body.testCase.assigned_to).toEqual(userEmail)

    const response = await request(app.server)
      .get(`/test-cases/user/${userEmail}`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.testCases).length.to.equal(2)
    expect(response.body.testCases[0].title).to.be('Test Case 1')
    expect(response.body.testCases[1].title).to.be('Test Case 3')
  })
})
