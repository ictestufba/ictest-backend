import { Prisma, TestCase } from '@prisma/client'
import { TestCasesRepository } from '../test-cases-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryTestCasesRepository implements TestCasesRepository {
  public items: TestCase[] = []

  async findById(id: string) {
    const testCase = this.items.find((item) => item.id === id)

    if (!testCase) {
      return null
    }

    return testCase
  }

  async create(data: Prisma.TestCaseUncheckedCreateInput) {
    const testCase = {
      id: data.id ?? randomUUID(),
      title: data.title,
      status: data.status ?? 'open',
      description: data.description ?? null,
      project_id: data.project_id ?? null,
      priority: data.priority ?? 'not_set',
      type: data.type ?? 'other',
      layer: data.layer ?? 'not_set',
      behavior: data.behavior ?? 'not_set',
      automation_status: data.automation_status ?? 'not_automated',
      attachment: data.attachment ?? null,
      assigned_to: data.assigned_to ?? null,
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.items.push(testCase)

    return testCase
  }

  async delete(testCaseId: string) {
    this.items = this.items.filter((item) => item.id !== testCaseId)
  }

  async getTestCasesByProjectId(projectId: string): Promise<TestCase[]> {
    const testCases = this.items.filter((item) => item.project_id === projectId)

    return testCases
  }

  async update(testCaseId: string, data: Partial<TestCase>) {
    const index = this.items.findIndex((testCase) => testCase.id === testCaseId)

    if (index === -1) {
      return null
    }

    this.items[index] = { ...this.items[index], ...data }

    return this.items[index]
  }

  async assignToUser(testCaseId: string, userEmail: string) {
    const index = this.items.findIndex((testCase) => testCase.id === testCaseId)

    if (index === -1) {
      return null
    }

    this.items[index].assigned_to = userEmail

    return this.items[index]
  }

  async getTestCasesByUser(userId: string) {
    const testCases = this.items.filter(
      (testCase) => testCase.assigned_to === userId,
    )

    return testCases
  }
}
