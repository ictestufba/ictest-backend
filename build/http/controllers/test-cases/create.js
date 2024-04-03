"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/http/controllers/test-cases/create.ts
var create_exports = {};
__export(create_exports, {
  create: () => create
});
module.exports = __toCommonJS(create_exports);
var import_zod2 = require("zod");

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["dev", "test", "production"]).default("dev"),
  JWT_SECRET: import_zod.z.string(),
  PORT: import_zod.z.coerce.number().default(8080)
});
var _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  console.error("\u274C Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables.");
}
var env = _env.data;

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  log: env.NODE_ENV === "dev" ? ["query"] : []
});

// src/repositories/prisma/prisma-projects-repository.ts
var PrismaProjectsRepository = class {
  async findById(id) {
    const project = await prisma.project.findUnique({
      where: {
        id
      },
      include: {
        members: true
      }
    });
    if (!project || project.is_deleted)
      return null;
    return project;
  }
  async list() {
    return prisma.project.findMany({
      where: { is_deleted: false },
      include: {
        members: {
          include: {
            user: true
          }
        },
        test_cases: true
      }
    });
  }
  async create(data) {
    const project = await prisma.project.create({
      data: { ...data, is_deleted: false }
    });
    return project;
  }
  async delete(projectId) {
    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        is_deleted: true
      }
    });
  }
  async findByIdAndUpdate(projectId, data) {
    const project = await prisma.project.update({
      where: {
        id: projectId
      },
      data
    });
    if (!project || project.is_deleted)
      return null;
    return project;
  }
  async addMember(projectId, userId, role) {
    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        members: {
          create: {
            user_id: userId,
            role
          }
        }
      }
    });
  }
  async removeMember(projectId, userId) {
    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        members: {
          delete: {
            user_id_project_id: {
              user_id: userId,
              project_id: projectId
            }
          }
        }
      }
    });
  }
  async getMemberIds(projectId) {
    const project = await prisma.project.findUnique({
      where: {
        id: projectId
      },
      include: {
        members: true
      }
    });
    if (!project || project.is_deleted)
      return null;
    return project.members.map((user) => user.user_id);
  }
};

// src/repositories/prisma/prisma-test-cases-repository.ts
var PrismaTestCasesRepository = class {
  async findById(id) {
    const testCase = await prisma.testCase.findUnique({
      where: {
        id
      }
    });
    if (!testCase || testCase.is_deleted)
      return null;
    return testCase;
  }
  async create(data) {
    const testCase = await prisma.testCase.create({
      data: { ...data, is_deleted: false }
    });
    return testCase;
  }
  async delete(testCaseId) {
    await prisma.testCase.update({
      where: {
        id: testCaseId
      },
      data: {
        is_deleted: true
      }
    });
  }
  async findByAndUpdate(testCaseId, data) {
    const testCase = await prisma.testCase.update({
      where: {
        id: testCaseId
      },
      data
    });
    if (!testCase || testCase.is_deleted)
      return null;
    return testCase;
  }
  async getTestCasesByProjectId(projectId) {
    const testCases = await prisma.testCase.findMany({
      where: {
        project_id: projectId,
        is_deleted: false
      }
    });
    return testCases;
  }
  async assignToUser(testCaseId, userId) {
    const testCase = await prisma.testCase.update({
      where: {
        id: testCaseId
      },
      data: {
        assigned_to: {
          set: userId
        }
      }
    });
    if (!testCase || testCase.is_deleted)
      return null;
    return testCase;
  }
  async unassign(testCaseId) {
    const testCase = await prisma.testCase.update({
      where: {
        id: testCaseId
      },
      data: {
        assigned_to: {
          set: null
        }
      }
    });
    if (!testCase || testCase.is_deleted)
      return null;
    return testCase;
  }
  async getTestCasesByUser(userId) {
    const testCases = await prisma.testCase.findMany({
      where: {
        assigned_to: userId,
        is_deleted: false
      }
    });
    return testCases;
  }
};

// src/use-cases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found.");
  }
};

// src/use-cases/create-test-case.ts
var CreateTestCaseUseCase = class {
  constructor(projectsRepository, testCasesRepository) {
    this.projectsRepository = projectsRepository;
    this.testCasesRepository = testCasesRepository;
  }
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
    attachment
  }) {
    const project = await this.projectsRepository.findById(project_id);
    if (!project) {
      throw new ResourceNotFoundError();
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
      attachment
    });
    return {
      test_case
    };
  }
};

// src/use-cases/factories/make-create-test-case-use-case.ts
function makeCreateTestCaseUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const testCasesRepository = new PrismaTestCasesRepository();
  const useCase = new CreateTestCaseUseCase(
    projectsRepository,
    testCasesRepository
  );
  return useCase;
}

// src/http/controllers/test-cases/create.ts
async function create(request, reply) {
  const createTestCaseBodySchema = import_zod2.z.object({
    project_id: import_zod2.z.string().uuid(),
    title: import_zod2.z.string(),
    status: import_zod2.z.enum(["open", "in_progress", "error", "success"]).default("open"),
    description: import_zod2.z.string().nullable(),
    priority: import_zod2.z.enum(["not_set", "high", "medium", "low"]).default("not_set"),
    type: import_zod2.z.enum([
      "other",
      "functional",
      "smoke",
      "regression",
      "security",
      "usability",
      "performance",
      "acceptance",
      "compatibility",
      "integration",
      "exploratory"
    ]).default("other"),
    layer: import_zod2.z.enum(["not_set", "e2e", "api", "unit"]).default("not_set"),
    behavior: import_zod2.z.enum(["not_set", "positive", "negative", "destructive"]).default("not_set"),
    automation_status: import_zod2.z.enum(["not_automated", "to_be_automated", "automated"]).default("not_automated"),
    deadline: import_zod2.z.string().nullable().default(null),
    attachment: import_zod2.z.string().nullable().default(null)
  });
  const {
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
    attachment
  } = createTestCaseBodySchema.parse(request.body);
  const createTestCaseUseCase = makeCreateTestCaseUseCase();
  const testCase = await createTestCaseUseCase.execute({
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
    attachment
  });
  return reply.status(201).send(testCase);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  create
});
