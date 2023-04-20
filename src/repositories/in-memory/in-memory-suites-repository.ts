import { Prisma, Suite } from '@prisma/client'
import { SuitesRepository } from '../suites-repository'
import { randomUUID } from 'node:crypto'

export class InMemorySuitesRepository implements SuitesRepository {
  public items: Suite[] = []

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
}
