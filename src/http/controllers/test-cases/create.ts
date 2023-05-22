import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateTestCaseUseCase } from '@/use-cases/factories/make-create-test-case-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createTestCaseBodySchema = z.object({
    project_id: z.string().uuid(),
    title: z.string(),
    status: z.enum(['open', 'in_progress', 'error', 'success']).default('open'),
    description: z.string().nullable(),
    severity: z
      .enum([
        'not_set',
        'blocker',
        'critical',
        'major',
        'normal',
        'minor',
        'trivial',
      ])
      .default('normal'),
    priority: z.enum(['not_set', 'high', 'medium', 'low']).default('not_set'),
    type: z
      .enum([
        'other',
        'functional',
        'smoke',
        'regression',
        'security',
        'usability',
        'performance',
        'acceptance',
        'compatibility',
        'integration',
        'exploratory',
      ])
      .default('other'),
    layer: z.enum(['not_set', 'e2e', 'api', 'unit']).default('not_set'),
    is_flaky: z.boolean(),
    behavior: z
      .enum(['not_set', 'positive', 'negative', 'destructive'])
      .default('not_set'),
    automation_status: z
      .enum(['not_automated', 'to_be_automated', 'automated'])
      .default('not_automated'),
    pre_conditions: z.string().nullable().default(null),
    post_conditions: z.string().nullable().default(null),
  })

  const {
    project_id,
    title,
    status,
    description,
    severity,
    priority,
    type,
    layer,
    is_flaky,
    behavior,
    automation_status,
    pre_conditions,
    post_conditions,
  } = createTestCaseBodySchema.parse(request.body)

  const createTestCaseUseCase = makeCreateTestCaseUseCase()

  const testCase = await createTestCaseUseCase.execute({
    project_id,
    title,
    status,
    description,
    severity,
    priority,
    type,
    layer,
    is_flaky,
    behavior,
    automation_status,
    pre_conditions,
    post_conditions,
  })

  return reply.status(201).send(testCase)
}
