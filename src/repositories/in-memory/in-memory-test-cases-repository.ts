import { Prisma, TestCase } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { TestCasesRepository } from '../test-cases-repository'

export class InMemoryTestCasesRepository implements TestCasesRepository {
  public items: TestCase[] = []

  async findById(id: string) {
    const testCase = this.items.find((item) => item.id === id)

    if (!testCase || testCase.is_deleted) return null

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
      deadline: data.deadline ? new Date(data.deadline) : null,
      attachment: data.attachment ?? null,
      assigned_to: data.assigned_to ?? null,
      created_at: new Date(),
      updated_at: new Date(),
      is_deleted: false,
      error_attachment: null,
      error_description: null,
    }

    this.items.push(testCase)

    return testCase
  }

  async delete(testCaseId: string) {
    const index = this.items.findIndex((testCase) => testCase.id === testCaseId)

    this.items[index].is_deleted = true
  }

  async getTestCasesByProjectId(projectId: string): Promise<TestCase[]> {
    const testCases = this.items.filter(
      (item) => item.project_id === projectId && !item.is_deleted,
    )

    return testCases
  }

  async findByAndUpdate(testCaseId: string, data: Partial<TestCase>) {
    const index = this.items.findIndex((testCase) => testCase.id === testCaseId)

    if (index === -1 || this.items[index].is_deleted) return null

    this.items[index] = { ...this.items[index], ...data }

    return this.items[index]
  }

  async assignToUser(testCaseId: string, userId: string) {
    const index = this.items.findIndex((testCase) => testCase.id === testCaseId)

    if (index === -1 || this.items[index].is_deleted) return null

    this.items[index].assigned_to = userId

    return this.items[index]
  }

  async unassign(testCaseId: string) {
    const index = this.items.findIndex((testCase) => testCase.id === testCaseId)

    if (index === -1 || this.items[index].is_deleted) return null

    this.items[index].assigned_to = null

    return this.items[index]
  }

  async getTestCasesByUser(userId: string) {
    const testCases = this.items.filter(
      (testCase) => testCase.assigned_to === userId && !testCase.is_deleted,
    )

    return testCases
  }
}
