import { PrismaSuitesRepository } from '@/repositories/prisma/prisma-suites-repository'
import { UpdateSuiteUseCase } from '../update-suite'

export function makeUpdateSuiteUseCase() {
  const suitesRepository = new PrismaSuitesRepository()

  const useCase = new UpdateSuiteUseCase(suitesRepository)

  return useCase
}
