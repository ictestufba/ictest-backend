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

    return testCase
  }

  async delete(testCaseId: string) {
    await prisma.testCase.delete({
      where: {
        id: testCaseId,
      },
    })
  }

  async getTestCasesByProjectId(projectId: string) {
    const testCases = await prisma.testCase.findMany({
      where: {
        project_id: projectId,
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

    return testCase
  }

  async assignToUser(testCaseId: string, userEmail: string) {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    })

    if (!user) {
      return null
    }

    const testCase = await prisma.testCase.update({
      where: {
        id: testCaseId,
      },
      data: {
        assigned_to: {
          set: userEmail,
        },
      },
    })

    return testCase
  }

  async getTestCasesAssignedToUser(userEmail: string) {
    const testCases = await prisma.testCase.findMany({
      where: {
        assigned_to: userEmail,
      },
    })

    return testCases
  }
}
