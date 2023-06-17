import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

import { TestCasesRepository } from '../test-cases-repository'

export class PrismaTestCasesRepository implements TestCasesRepository {
  async create(data: Prisma.TestCaseCreateInput) {
    const testCase = await prisma.testCase.create({
      data,
    })

    return testCase
  }

  async findById(id: string) {
    const testCase = await prisma.testCase.findUnique({
      where: {
        id,
      },
    })

    if (!testCase || testCase.is_deleted) return null

    return testCase
  }

  async delete(testCaseId: string) {
    await prisma.testCase.update({
      where: {
        id: testCaseId,
      },
      data: {
        is_deleted: true,
      },
    })
  }

  async getTestCasesByProjectId(projectId: string) {
    const testCases = await prisma.testCase.findMany({
      where: {
        project_id: projectId,
        is_deleted: false,
      },
    })

    return testCases
  }

  async update(testCaseId: string, data: Prisma.TestCaseUpdateInput) {
    const testCase = await prisma.testCase.update({
      where: {
        id: testCaseId,
      },
      data,
    })

    if (!testCase || testCase.is_deleted) return null

    return testCase
  }

  async assignToUser(testCaseId: string, userId: string) {
    const testCase = await prisma.testCase.update({
      where: {
        id: testCaseId,
      },
      data: {
        assigned_to: {
          set: userId,
        },
      },
    })

    return testCase
  }

  async getTestCasesByUser(userId: string) {
    const testCases = await prisma.testCase.findMany({
      where: {
        assigned_to: userId,
        is_deleted: false,
      },
    })

    return testCases
  }
}
