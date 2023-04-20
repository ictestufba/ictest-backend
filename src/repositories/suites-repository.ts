import { Prisma, Suite } from '@prisma/client'

export interface SuitesRepository {
  create(data: Prisma.SuiteUncheckedCreateInput): Promise<Suite>
}
