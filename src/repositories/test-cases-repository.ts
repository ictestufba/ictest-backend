import { Prisma, TestCase } from '@prisma/client'

export interface TestCasesRepository {
  create(data: Prisma.TestCaseUncheckedCreateInput): Promise<TestCase>
  findById(id: string): Promise<TestCase | null>
  delete(testCaseId: string): Promise<void>
  getTestCasesBySuiteId(suiteId: string): Promise<TestCase[]>
}
