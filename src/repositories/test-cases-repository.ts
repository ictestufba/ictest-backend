import { Prisma, TestCase } from '@prisma/client'

export interface TestCasesRepository {
  create(data: Prisma.TestCaseUncheckedCreateInput): Promise<TestCase>
  findById(id: string): Promise<TestCase | null>
  delete(testCaseId: string): Promise<void>
  getTestCasesBySuiteId(suiteId: string): Promise<TestCase[]>
  update(
    testCaseId: string,
    data: Prisma.TestCaseUpdateInput,
  ): Promise<TestCase | null>
  assignToUser(testCaseId: string, userEmail: string): Promise<TestCase | null>
}
