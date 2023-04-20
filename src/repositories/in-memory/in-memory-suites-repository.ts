import { Prisma, Suite } from '@prisma/client'
import { SuitesRepository } from '../suites-repository'
import { randomUUID } from 'node:crypto'

export class InMemorySuitesRepository implements SuitesRepository {
  public items: Suite[] = []

  async findById(id: string) {
    const suite = this.items.find((item) => item.id === id)

    if (!suite) {
      return null
    }

    return suite
  }

  async create(data: Prisma.SuiteUncheckedCreateInput) {
    const suite = {
      id: data.id ?? randomUUID(),
      title: data.title,
      description: data.description ?? null,
      pre_conditions: data.pre_conditions ?? null,
      project_id: data.project_id ?? null,
      test_cases: [],
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.items.push(suite)

    return suite
  }

  async getSuitesByProjectId(projectId: string) {
    const suites = this.items.filter((item) => item.project_id === projectId)

    return suites
  }

  async findByIdAndDelete(suiteId: string) {
    this.items = this.items.filter((item) => item.id !== suiteId)
  }
}
