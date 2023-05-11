import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Delete Project (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to delete a project', async () => {
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

    const listProjectsResponse = await request(app.server)
      .get('/projects')
      .set('Authorization', `Bearer ${token}`)

    expect(listProjectsResponse.body.projects.length).toEqual(1)

    await request(app.server)
      .delete(`/projects/${projectId}`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    const listProjectsResponseAfterDelete = await request(app.server)
      .get('/projects')
      .set('Authorization', `Bearer ${token}`)

    expect(listProjectsResponseAfterDelete.statusCode).toEqual(200)
    expect(listProjectsResponseAfterDelete.body.projects.length).toEqual(0)
  })
})
