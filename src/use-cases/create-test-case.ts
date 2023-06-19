import {
  TestCase,
  Status,
  Priority,
  Type,
  Layer,
  Behavior,
  AutomationStatus,
} from '@prisma/client'
import { ProjectsRepository } from '@/repositories/projects-repository'
import { TestCasesRepository } from '@/repositories/test-cases-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface CreateTestCaseUseCaseRequest {
  project_id: string
  title: string
  status: Status
  description: string | null
  priority: Priority
  type: Type
  layer: Layer
  behavior: Behavior
  automation_status: AutomationStatus
  deadline: Date | string | null
  attachment: string | null
}

interface CreateTestCaseUseCaseResponse {
  test_case: TestCase
}

export class CreateTestCaseUseCase {
  constructor(
    private projectsRepository: ProjectsRepository,
    private testCasesRepository: TestCasesRepository,
  ) {}

  async execute({
    project_id,
    title,
    status,
    description,
    priority,
    type,
    layer,
    behavior,
    automation_status,
    deadline,
    attachment,
  }: CreateTestCaseUseCaseRequest): Promise<CreateTestCaseUseCaseResponse> {
    const project = await this.projectsRepository.findById(project_id)

    if (!project) {
      throw new ResourceNotFoundError()
    }

    const test_case = await this.testCasesRepository.create({
      project_id,
      title,
      status,
      description,
      priority,
      type,
      layer,
      behavior,
      automation_status,
      deadline,
      attachment,
    })

    return {
      test_case,
    }
  }
}
