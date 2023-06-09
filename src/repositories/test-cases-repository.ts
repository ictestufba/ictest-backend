import { Prisma, TestCase } from '@prisma/client'

export interface TestCasesRepository {
  create(data: Prisma.TestCaseUncheckedCreateInput): Promise<TestCase>
  findById(id: string): Promise<TestCase | null>
  delete(testCaseId: string): Promise<void>
  getTestCasesByProjectId(projectId: string): Promise<TestCase[]>
  findByAndUpdate(
    testCaseId: string,
    data: Prisma.TestCaseUpdateInput,
  ): Promise<TestCase | null>
  assignToUser(testCaseId: string, userId: string): Promise<TestCase | null>
  unassign(testCaseId: string): Promise<TestCase | null>
  getTestCasesByUser(userId: string): Promise<TestCase[]>
}
