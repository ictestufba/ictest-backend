import { TestCase } from '@prisma/client'
import { TestCasesRepository } from '@/repositories/test-cases-repository'
import { ProjectsRepository } from '@/repositories/projects-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface GetTestCasesFromProjectUseCaseRequest {
  projectId: string
}

interface GetTestCasesFromProjectUseCaseResponse {
  testCases: TestCase[]
}

export class GetTestCasesFromProjectUseCase {
  constructor(
    private projectsRepository: ProjectsRepository,
    private testCasesRepository: TestCasesRepository,
  ) {}

  async execute({
    projectId,
  }: GetTestCasesFromProjectUseCaseRequest): Promise<GetTestCasesFromProjectUseCaseResponse> {
    const project = await this.projectsRepository.findById(projectId)

    if (!project) {
      throw new ResourceNotFoundError()
    }

    const testCases = await this.testCasesRepository.getTestCasesByProjectId(
      projectId,
    )

    return {
      testCases,
    }
  }
}
