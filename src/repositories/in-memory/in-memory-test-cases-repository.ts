import { Prisma, TestCase } from '@prisma/client'
import { TestCasesRepository } from '../test-cases-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryTestCasesRepository implements TestCasesRepository {
  public items: TestCase[] = []

  async create(data: Prisma.TestCaseUncheckedCreateInput) {
    const testCase = {
      id: data.id ?? randomUUID(),
      title: data.title,
      status: data.status ?? 'actual',
      description: data.description ?? null,
      project_id: data.project_id ?? null,
      suite_id: data.suite_id ?? null,
      severity: data.severity ?? 'not_set',
      priority: data.priority ?? 'not_set',
      type: data.type ?? 'other',
      layer: data.layer ?? 'not_set',
      is_flaky: data.is_flaky ?? false,
      behavior: data.behavior ?? 'not_set',
      automation_status: data.automation_status ?? 'not_automated',
      assigned_to: data.assigned_to ?? null,
      pre_conditions: data.pre_conditions ?? null,
      post_conditions: data.post_conditions ?? null,
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.items.push(testCase)

    return testCase
  }
}
