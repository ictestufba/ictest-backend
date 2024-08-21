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

// src/http/controllers/test-cases/routes.ts
var routes_exports = {};
__export(routes_exports, {
  testCasesRoutes: () => testCasesRoutes
});
module.exports = __toCommonJS(routes_exports);

// src/http/middlewares/verify-jwt.ts
async function verifyJWT(request, reply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    return reply.status(401).send({ message: "Unauthorized." });
  }
}

// src/http/controllers/test-cases/create.ts
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
      where: {
        is_deleted: false
      },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
                created_at: true,
                password_hash: false
              }
            }
          }
        },
        test_cases: {
          where: {
            is_deleted: false
          }
        }
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

// src/http/controllers/test-cases/details.ts
var import_zod3 = require("zod");

// src/use-cases/get-test-case-details.ts
var GetTestCaseDetailsUseCase = class {
  constructor(testCasesRepository) {
    this.testCasesRepository = testCasesRepository;
  }
  async execute({
    testCaseId
  }) {
    const testCase = await this.testCasesRepository.findById(testCaseId);
    if (!testCase) {
      throw new ResourceNotFoundError();
    }
    return {
      testCase
    };
  }
};

// src/use-cases/factories/make-get-test-case-details-use-case.ts
function makeGetTestCaseDetailsUseCase() {
  const testCasesRepository = new PrismaTestCasesRepository();
  const useCase = new GetTestCaseDetailsUseCase(testCasesRepository);
  return useCase;
}

// src/http/controllers/test-cases/details.ts
async function details(request, reply) {
  const getTestCaseDetailsParamsSchema = import_zod3.z.object({
    testCaseId: import_zod3.z.string().uuid()
  });
  const { testCaseId } = getTestCaseDetailsParamsSchema.parse(request.params);
  const getTestCaseDetailsUseCase = makeGetTestCaseDetailsUseCase();
  const testCase = await getTestCaseDetailsUseCase.execute({
    testCaseId
  });
  return reply.status(200).send(testCase);
}

// src/http/controllers/test-cases/delete-test-case.ts
var import_zod4 = require("zod");

// src/use-cases/delete-test-case.ts
var DeleteTestCaseUseCase = class {
  constructor(testCasesRepository) {
    this.testCasesRepository = testCasesRepository;
  }
  async execute({ testCaseId }) {
    const testCaseToBeDeleted = await this.testCasesRepository.findById(
      testCaseId
    );
    if (!testCaseToBeDeleted) {
      throw new ResourceNotFoundError();
    }
    await this.testCasesRepository.delete(testCaseId);
  }
};

// src/use-cases/factories/make-delete-test-case-use-case.ts
function makeDeleteTestCaseUseCase() {
  const testCasesRepository = new PrismaTestCasesRepository();
  const useCase = new DeleteTestCaseUseCase(testCasesRepository);
  return useCase;
}

// src/http/controllers/test-cases/delete-test-case.ts
async function deleteTestCase(request, reply) {
  const deleteTestCaseParamsSchema = import_zod4.z.object({
    testCaseId: import_zod4.z.string().uuid()
  });
  const { testCaseId } = deleteTestCaseParamsSchema.parse(request.params);
  const deleteTestCaseUseCase = makeDeleteTestCaseUseCase();
  const testCase = await deleteTestCaseUseCase.execute({
    testCaseId
  });
  return reply.status(200).send(testCase);
}

// src/use-cases/update-test-case.ts
var UpdateTestCaseUseCase = class {
  constructor(testCasesRepository) {
    this.testCasesRepository = testCasesRepository;
  }
  async execute({
    testCaseId,
    data
  }) {
    const testCaseFound = await this.testCasesRepository.findByAndUpdate(
      testCaseId,
      data
    );
    if (!testCaseFound) {
      throw new ResourceNotFoundError();
    }
    const testCase = await this.testCasesRepository.findById(
      testCaseId
    );
    return {
      testCase
    };
  }
};

// src/use-cases/factories/make-update-test-case-use-case.ts
function makeUpdateTestCaseUseCase() {
  const testCasesRepository = new PrismaTestCasesRepository();
  const useCase = new UpdateTestCaseUseCase(testCasesRepository);
  return useCase;
}

// src/http/controllers/test-cases/update.ts
var import_zod5 = require("zod");
async function update(request, reply) {
  const updateTestCaseParamsSchema = import_zod5.z.object({
    testCaseId: import_zod5.z.string().uuid()
  });
  const updateTestCaseBodySchema = import_zod5.z.object({
    data: import_zod5.z.object({
      title: import_zod5.z.string().optional(),
      status: import_zod5.z.enum(["open", "in_progress", "error", "success"]).optional(),
      description: import_zod5.z.string().nullable().optional(),
      error_description: import_zod5.z.string().nullable().optional(),
      error_attachment: import_zod5.z.string().nullable().optional(),
      priority: import_zod5.z.enum(["not_set", "high", "medium", "low"]).optional(),
      type: import_zod5.z.enum([
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
      ]).optional(),
      layer: import_zod5.z.enum(["not_set", "e2e", "api", "unit"]).optional(),
      behavior: import_zod5.z.enum(["not_set", "positive", "negative", "destructive"]).optional(),
      automation_status: import_zod5.z.enum(["not_automated", "to_be_automated", "automated"]).optional(),
      deadline: import_zod5.z.string().nullable().default(null)
    })
  });
  const { testCaseId } = updateTestCaseParamsSchema.parse(request.params);
  const { data } = updateTestCaseBodySchema.parse(request.body);
  const updateTestCaseUseCase = makeUpdateTestCaseUseCase();
  const testCase = await updateTestCaseUseCase.execute({
    testCaseId,
    data
  });
  return reply.status(200).send(testCase);
}

// src/http/controllers/test-cases/assign-to-user.ts
var import_zod6 = require("zod");

// src/repositories/prisma/prisma-users-repository.ts
var PrismaUsersRepository = class {
  async findById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    });
    return user;
  }
  async findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    return user;
  }
  async findByPartialEmail(email) {
    const users = await prisma.user.findMany({
      where: {
        email: {
          contains: email
        }
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        created_at: true,
        password_hash: false
      }
    });
    return users;
  }
  async create(data) {
    const user = await prisma.user.create({
      data
    });
    return user;
  }
};

// src/use-cases/errors/user-does-not-exist-error.ts
var UserDoesNotExistError = class extends Error {
  constructor() {
    super("User does not exist.");
  }
};

// src/use-cases/assign-test-case-to-user.ts
var AssignTestCaseToUserUseCase = class {
  constructor(testCasesRepository, usersRepository) {
    this.testCasesRepository = testCasesRepository;
    this.usersRepository = usersRepository;
  }
  async execute({
    testCaseId,
    userEmail
  }) {
    const user = await this.usersRepository.findByEmail(userEmail);
    if (!user) {
      throw new UserDoesNotExistError();
    }
    const userId = user.id;
    const testCaseFound = await this.testCasesRepository.assignToUser(
      testCaseId,
      userId
    );
    if (!testCaseFound) {
      throw new ResourceNotFoundError();
    }
    const testCase = await this.testCasesRepository.findById(
      testCaseId
    );
    return {
      testCase
    };
  }
};

// src/use-cases/factories/make-assign-test-case-to-user-use-case.ts
function makeAssignTestCaseToUserUseCase() {
  const testCasesRepository = new PrismaTestCasesRepository();
  const usersRepository = new PrismaUsersRepository();
  const useCase = new AssignTestCaseToUserUseCase(
    testCasesRepository,
    usersRepository
  );
  return useCase;
}

// src/http/controllers/test-cases/assign-to-user.ts
async function assignToUser(request, reply) {
  const assignTestCaseToUserParamsSchema = import_zod6.z.object({
    testCaseId: import_zod6.z.string().uuid()
  });
  const assignTestCaseToUserBodySchema = import_zod6.z.object({
    userEmail: import_zod6.z.string().email()
  });
  const { testCaseId } = assignTestCaseToUserParamsSchema.parse(request.params);
  const { userEmail } = assignTestCaseToUserBodySchema.parse(request.body);
  const assignTestCaseToUserUseCase = makeAssignTestCaseToUserUseCase();
  const testCase = await assignTestCaseToUserUseCase.execute({
    testCaseId,
    userEmail
  });
  return reply.status(200).send(testCase);
}

// src/http/controllers/test-cases/unassign.ts
var import_zod7 = require("zod");

// src/use-cases/unassign-test-case.ts
var UnassignTestCaseUseCase = class {
  constructor(testCasesRepository) {
    this.testCasesRepository = testCasesRepository;
  }
  async execute({
    testCaseId
  }) {
    const testCase = await this.testCasesRepository.unassign(testCaseId);
    if (!testCase) {
      throw new ResourceNotFoundError();
    }
    await this.testCasesRepository.findById(testCaseId);
    return {
      testCase
    };
  }
};

// src/use-cases/factories/make-unassign-test-case.ts
function makeUnassignTestCaseUseCase() {
  const testCasesRepository = new PrismaTestCasesRepository();
  const useCase = new UnassignTestCaseUseCase(testCasesRepository);
  return useCase;
}

// src/http/controllers/test-cases/unassign.ts
async function unassign(request, reply) {
  const unassignTestCaseParamsSchema = import_zod7.z.object({
    testCaseId: import_zod7.z.string().uuid()
  });
  const { testCaseId } = unassignTestCaseParamsSchema.parse(request.params);
  const unassignTestCaseUseCase = makeUnassignTestCaseUseCase();
  const testCase = await unassignTestCaseUseCase.execute({
    testCaseId
  });
  return reply.status(200).send(testCase);
}

// src/http/controllers/test-cases/get-by-user.ts
var import_zod8 = require("zod");

// src/use-cases/get-test-cases-by-user.ts
var GetTestCasesByUserUseCase = class {
  constructor(testCasesRepository, usersRepository) {
    this.testCasesRepository = testCasesRepository;
    this.usersRepository = usersRepository;
  }
  async execute({
    userEmail
  }) {
    const user = await this.usersRepository.findByEmail(userEmail);
    if (!user) {
      throw new UserDoesNotExistError();
    }
    const userId = user.id;
    const testCases = await this.testCasesRepository.getTestCasesByUser(userId);
    return {
      testCases
    };
  }
};

// src/use-cases/factories/make-get-test-cases-by-user-use-case.ts
function makeGetTestCasesByUserUseCase() {
  const testCasesRepository = new PrismaTestCasesRepository();
  const usersRepository = new PrismaUsersRepository();
  const useCase = new GetTestCasesByUserUseCase(
    testCasesRepository,
    usersRepository
  );
  return useCase;
}

// src/http/controllers/test-cases/get-by-user.ts
async function getByUser(request, reply) {
  const getTestCasesByUserParamsSchema = import_zod8.z.object({
    userEmail: import_zod8.z.string().email()
  });
  const { userEmail } = getTestCasesByUserParamsSchema.parse(request.params);
  const getTestCasesByUserUseCase = makeGetTestCasesByUserUseCase();
  const testCases = await getTestCasesByUserUseCase.execute({
    userEmail
  });
  return reply.status(200).send(testCases);
}

// src/http/controllers/test-cases/routes.ts
async function testCasesRoutes(app) {
  app.addHook("onRequest", verifyJWT);
  app.get("/test-cases/:testCaseId", details);
  app.post("/test-cases", create);
  app.get("/test-cases/user/:userEmail", getByUser);
  app.patch("/test-cases/:testCaseId/update", update);
  app.patch("/test-cases/:testCaseId/assign", assignToUser);
  app.patch("/test-cases/:testCaseId/unassign", unassign);
  app.delete("/test-cases/:testCaseId", deleteTestCase);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  testCasesRoutes
});
