import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

import { SuitesRepository } from '../suites-repository'

export class PrismaSuitesRepository implements SuitesRepository {
  async create(data: Prisma.SuiteCreateInput) {
    const suite = await prisma.suite.create({
      data,
    })

    return suite
  }

  async getSuitesByProjectId(projectId: string) {
    const suites = await prisma.suite.findMany({
      where: {
        project_id: projectId,
      },
    })

    return suites
  }

  async findById(id: string) {
    const suite = await prisma.suite.findUnique({
      where: {
        id,
      },
    })

    return suite
  }

  async findByIdAndDelete(suiteId: string) {
    await prisma.suite.delete({
      where: {
        id: suiteId,
      },
    })
  }

  async findByIdAndUpdate(suiteId: string, data: Prisma.SuiteUpdateInput) {
    const suite = await prisma.suite.update({
      where: {
        id: suiteId,
      },
      data,
    })

    return suite
  }
}
