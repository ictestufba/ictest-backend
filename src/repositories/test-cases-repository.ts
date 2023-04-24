import { Prisma, TestCase } from '@prisma/client'

export interface TestCasesRepository {
  create(data: Prisma.TestCaseUncheckedCreateInput): Promise<TestCase>
}
