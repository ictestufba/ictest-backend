"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app.ts
var app_exports = {};
__export(app_exports, {
  app: () => app
});
module.exports = __toCommonJS(app_exports);
var import_cookie = __toESM(require("@fastify/cookie"));
var import_cors = __toESM(require("@fastify/cors"));
var import_jwt = __toESM(require("@fastify/jwt"));
var import_fastify = __toESM(require("fastify"));
var import_zod20 = require("zod");

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

// src/http/middlewares/verify-jwt.ts
async function verifyJWT(request, reply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    return reply.status(401).send({ message: "Unauthorized." });
  }
}

// src/http/controllers/projects/add-member.ts
var import_zod2 = require("zod");

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
            user: true
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

// src/use-cases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found.");
  }
};

// src/use-cases/errors/user-does-not-exist-error.ts
var UserDoesNotExistError = class extends Error {
  constructor() {
    super("User does not exist.");
  }
};

// src/use-cases/add-member-to-project.ts
var AddMemberToProjectUseCase = class {
  constructor(projectsRepository, usersRepository) {
    this.projectsRepository = projectsRepository;
    this.usersRepository = usersRepository;
  }
  async execute({
    projectId,
    userEmail
  }) {
    const project = await this.projectsRepository.findById(projectId);
    if (!project) {
      throw new ResourceNotFoundError();
    }
    const user = await this.usersRepository.findByEmail(userEmail);
    if (!user) {
      throw new UserDoesNotExistError();
    }
    const userId = user.id;
    await this.projectsRepository.addMember(projectId, userId, "member");
    return {
      userEmail
    };
  }
};

// src/use-cases/factories/make-add-member-to-project-use-case.ts
function makeAddMemberToProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const usersRepository = new PrismaUsersRepository();
  const useCase = new AddMemberToProjectUseCase(
    projectsRepository,
    usersRepository
  );
  return useCase;
}

// src/http/controllers/projects/add-member.ts
async function addMember(request, reply) {
  const addMemberToProjectParamsSchema = import_zod2.z.object({
    projectId: import_zod2.z.string().uuid()
  });
  const addMemberToProjectBodySchema = import_zod2.z.object({
    userEmail: import_zod2.z.string().email()
  });
  const { projectId } = addMemberToProjectParamsSchema.parse(request.params);
  const { userEmail } = addMemberToProjectBodySchema.parse(request.body);
  const addMemberToProjectUseCase = makeAddMemberToProjectUseCase();
  await addMemberToProjectUseCase.execute({
    projectId,
    userEmail
  });
  return reply.status(200).send(userEmail);
}

// src/http/controllers/projects/create.ts
var import_zod3 = require("zod");

// src/use-cases/create-project.ts
var CreateProjectUseCase = class {
  constructor(projectsRepository) {
    this.projectsRepository = projectsRepository;
  }
  async execute({
    userId,
    name,
    code,
    description
  }) {
    const project = await this.projectsRepository.create({
      name,
      code,
      description
    });
    const projectId = project.id;
    await this.projectsRepository.addMember(projectId, userId, "admin");
    return {
      project
    };
  }
};

// src/use-cases/factories/make-create-project-use-case.ts
function makeCreateProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const useCase = new CreateProjectUseCase(projectsRepository);
  return useCase;
}

// src/http/controllers/projects/create.ts
async function create(request, reply) {
  const createProjectBodySchema = import_zod3.z.object({
    userId: import_zod3.z.string().uuid(),
    name: import_zod3.z.string(),
    code: import_zod3.z.string().max(10),
    description: import_zod3.z.string().nullable()
  });
  console.log("request.body :>> ", request.body);
  const { userId, name, code, description } = createProjectBodySchema.parse(
    request.body
  );
  const createProjectUseCase = makeCreateProjectUseCase();
  const project = await createProjectUseCase.execute({
    userId,
    name,
    code,
    description
  });
  return reply.status(201).send(project);
}

// src/http/controllers/projects/delete-project.ts
var import_zod4 = require("zod");

// src/use-cases/delete-project.ts
var DeleteProjectUseCase = class {
  constructor(projectsRepository) {
    this.projectsRepository = projectsRepository;
  }
  async execute({ projectId }) {
    const projectToBeDeleted = await this.projectsRepository.findById(projectId);
    if (!projectToBeDeleted) {
      throw new ResourceNotFoundError();
    }
    await this.projectsRepository.delete(projectId);
  }
};

// src/use-cases/factories/make-delete-project-use-case.ts
function makeDeleteProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const useCase = new DeleteProjectUseCase(projectsRepository);
  return useCase;
}

// src/http/controllers/projects/delete-project.ts
async function deleteProject(request, reply) {
  const deleteProjectParamsSchema = import_zod4.z.object({
    projectId: import_zod4.z.string().uuid()
  });
  const { projectId } = deleteProjectParamsSchema.parse(request.params);
  const deleteProjectUseCase = makeDeleteProjectUseCase();
  await deleteProjectUseCase.execute({
    projectId
  });
  return reply.status(200).send();
}

// src/http/controllers/projects/details.ts
var import_zod5 = require("zod");

// src/use-cases/get-project-details.ts
var GetProjectDetailsUseCase = class {
  constructor(projectsRepository) {
    this.projectsRepository = projectsRepository;
  }
  async execute({
    projectId
  }) {
    const project = await this.projectsRepository.findById(projectId);
    if (!project) {
      throw new ResourceNotFoundError();
    }
    return {
      project
    };
  }
};

// src/use-cases/factories/make-get-project-details-use-case.ts
function makeGetProjectDetailsUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const useCase = new GetProjectDetailsUseCase(projectsRepository);
  return useCase;
}

// src/http/controllers/projects/details.ts
async function details(request, reply) {
  const getProjectDetailsParamsSchema = import_zod5.z.object({
    projectId: import_zod5.z.string().uuid()
  });
  const { projectId } = getProjectDetailsParamsSchema.parse(request.params);
  const getProjectDetailsUseCase = makeGetProjectDetailsUseCase();
  const project = await getProjectDetailsUseCase.execute({
    projectId
  });
  return reply.status(200).send(project);
}

// src/http/controllers/projects/get-members.ts
var import_zod6 = require("zod");

// src/use-cases/get-members-from-project.ts
var GetMembersFromProjectUseCase = class {
  constructor(projectsRepository, usersRepository) {
    this.projectsRepository = projectsRepository;
    this.usersRepository = usersRepository;
  }
  async execute({
    projectId
  }) {
    const response = await this.projectsRepository.getMemberIds(projectId);
    if (!response) {
      throw new ResourceNotFoundError();
    }
    const users = [];
    for (let i = 0; i < response.length; i++) {
      const user = await this.usersRepository.findById(response[i]);
      if (user)
        users.push(user);
    }
    return { users };
  }
};

// src/use-cases/factories/make-get-members-from-project-use-case.ts
function makeGetMembersFromProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const usersRepository = new PrismaUsersRepository();
  const useCase = new GetMembersFromProjectUseCase(
    projectsRepository,
    usersRepository
  );
  return useCase;
}

// src/http/controllers/projects/get-members.ts
async function getMembers(request, reply) {
  const getMembersFromProjectParamsSchema = import_zod6.z.object({
    projectId: import_zod6.z.string().uuid()
  });
  const { projectId } = getMembersFromProjectParamsSchema.parse(request.params);
  const getMembersFromProjectUseCase = makeGetMembersFromProjectUseCase();
  const users = await getMembersFromProjectUseCase.execute({
    projectId
  });
  return reply.status(200).send(users);
}

// src/http/controllers/projects/get-test-cases.ts
var import_zod7 = require("zod");

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

// src/use-cases/get-test-cases-from-project.ts
var GetTestCasesFromProjectUseCase = class {
  constructor(projectsRepository, testCasesRepository) {
    this.projectsRepository = projectsRepository;
    this.testCasesRepository = testCasesRepository;
  }
  async execute({
    projectId
  }) {
    const project = await this.projectsRepository.findById(projectId);
    if (!project) {
      throw new ResourceNotFoundError();
    }
    const testCases = await this.testCasesRepository.getTestCasesByProjectId(
      projectId
    );
    return {
      testCases
    };
  }
};

// src/use-cases/factories/make-get-test-cases-from-project-use-case.ts
function makeGetTestCasesFromProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const testCasesRepository = new PrismaTestCasesRepository();
  const useCase = new GetTestCasesFromProjectUseCase(
    projectsRepository,
    testCasesRepository
  );
  return useCase;
}

// src/http/controllers/projects/get-test-cases.ts
async function getTestCases(request, reply) {
  const getTestCasesFromProjectParamsSchema = import_zod7.z.object({
    projectId: import_zod7.z.string().uuid()
  });
  const { projectId } = getTestCasesFromProjectParamsSchema.parse(
    request.params
  );
  const getTestCasesFromProjectUseCase = makeGetTestCasesFromProjectUseCase();
  const testCases = await getTestCasesFromProjectUseCase.execute({
    projectId
  });
  return reply.status(200).send(testCases);
}

// src/use-cases/list-projects.ts
var ListProjectsUseCase = class {
  constructor(projectsRepository) {
    this.projectsRepository = projectsRepository;
  }
  async execute() {
    const projects = await this.projectsRepository.list();
    return {
      projects
    };
  }
};

// src/use-cases/factories/make-list-projects-use-case.ts
function makeListProjectsUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const useCase = new ListProjectsUseCase(projectsRepository);
  return useCase;
}

// src/http/controllers/projects/list.ts
async function list(request, reply) {
  const listProjectsUseCase = makeListProjectsUseCase();
  const { projects } = await listProjectsUseCase.execute();
  return reply.status(200).send({
    projects
  });
}

// src/use-cases/remove-member-from-project.ts
var RemoveMemberFromProjectUseCase = class {
  constructor(projectsRepository, usersRepository) {
    this.projectsRepository = projectsRepository;
    this.usersRepository = usersRepository;
  }
  async execute({ projectId, userId }) {
    const project = await this.projectsRepository.findById(projectId);
    if (!project) {
      throw new ResourceNotFoundError();
    }
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new UserDoesNotExistError();
    }
    return await this.projectsRepository.removeMember(projectId, userId);
  }
};

// src/use-cases/factories/make-remove-member-from-project-use-case.ts
function makeRemoveMemberFromProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const usersRepository = new PrismaUsersRepository();
  const useCase = new RemoveMemberFromProjectUseCase(
    projectsRepository,
    usersRepository
  );
  return useCase;
}

// src/http/controllers/projects/remove-member.ts
var import_zod8 = require("zod");
async function removeMember(request, reply) {
  const removeMemberFromProjectParamsSchema = import_zod8.z.object({
    projectId: import_zod8.z.string().uuid()
  });
  const removeMemberFromProjectBodySchema = import_zod8.z.object({
    userId: import_zod8.z.string().uuid()
  });
  const { projectId } = removeMemberFromProjectParamsSchema.parse(
    request.params
  );
  const { userId } = removeMemberFromProjectBodySchema.parse(request.body);
  const removeMemberFromProjectUseCase = makeRemoveMemberFromProjectUseCase();
  await removeMemberFromProjectUseCase.execute({
    projectId,
    userId
  });
  return reply.status(204).send();
}

// src/http/controllers/projects/update.ts
var import_zod9 = require("zod");

// src/use-cases/update-project.ts
var UpdateProjectUseCase = class {
  constructor(projectsRepository) {
    this.projectsRepository = projectsRepository;
  }
  async execute({
    projectId,
    data
  }) {
    const projectFound = await this.projectsRepository.findByIdAndUpdate(
      projectId,
      data
    );
    if (!projectFound) {
      throw new ResourceNotFoundError();
    }
    const project = await this.projectsRepository.findById(
      projectId
    );
    return {
      project
    };
  }
};

// src/use-cases/factories/make-update-project-test-case.ts
function makeUpdateProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const useCase = new UpdateProjectUseCase(projectsRepository);
  return useCase;
}

// src/http/controllers/projects/update.ts
async function update(request, reply) {
  const updateProjectParamsSchema = import_zod9.z.object({
    projectId: import_zod9.z.string().uuid()
  });
  const updateProjectBodySchema = import_zod9.z.object({
    data: import_zod9.z.object({
      name: import_zod9.z.string().optional(),
      code: import_zod9.z.string().max(10).optional(),
      description: import_zod9.z.string().nullable()
    })
  });
  const { projectId } = updateProjectParamsSchema.parse(request.params);
  const { data } = updateProjectBodySchema.parse(request.body);
  const updateProjectUseCase = makeUpdateProjectUseCase();
  const project = await updateProjectUseCase.execute({
    projectId,
    data
  });
  return reply.status(200).send(project);
}

// src/http/controllers/projects/routes.ts
async function projectsRoutes(app2) {
  app2.addHook("onRequest", verifyJWT);
  app2.get("/projects", list);
  app2.get("/projects/:projectId", details);
  app2.get("/projects/:projectId/test-cases", getTestCases);
  app2.post("/projects", create);
  app2.patch("/projects/:projectId/update", update);
  app2.patch("/projects/:projectId/add-member", addMember);
  app2.delete("/projects/:projectId/remove-member", removeMember);
  app2.get("/projects/:projectId/members", getMembers);
  app2.delete("/projects/:projectId", deleteProject);
}

// src/http/controllers/test-cases/create.ts
var import_zod10 = require("zod");

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
async function create2(request, reply) {
  const createTestCaseBodySchema = import_zod10.z.object({
    project_id: import_zod10.z.string().uuid(),
    title: import_zod10.z.string(),
    status: import_zod10.z.enum(["open", "in_progress", "error", "success"]).default("open"),
    description: import_zod10.z.string().nullable(),
    priority: import_zod10.z.enum(["not_set", "high", "medium", "low"]).default("not_set"),
    type: import_zod10.z.enum([
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
    layer: import_zod10.z.enum(["not_set", "e2e", "api", "unit"]).default("not_set"),
    behavior: import_zod10.z.enum(["not_set", "positive", "negative", "destructive"]).default("not_set"),
    automation_status: import_zod10.z.enum(["not_automated", "to_be_automated", "automated"]).default("not_automated"),
    deadline: import_zod10.z.string().nullable().default(null),
    attachment: import_zod10.z.string().nullable().default(null)
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
var import_zod11 = require("zod");

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
async function details2(request, reply) {
  const getTestCaseDetailsParamsSchema = import_zod11.z.object({
    testCaseId: import_zod11.z.string().uuid()
  });
  const { testCaseId } = getTestCaseDetailsParamsSchema.parse(request.params);
  const getTestCaseDetailsUseCase = makeGetTestCaseDetailsUseCase();
  const testCase = await getTestCaseDetailsUseCase.execute({
    testCaseId
  });
  return reply.status(200).send(testCase);
}

// src/http/controllers/test-cases/delete-test-case.ts
var import_zod12 = require("zod");

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
  const deleteTestCaseParamsSchema = import_zod12.z.object({
    testCaseId: import_zod12.z.string().uuid()
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
var import_zod13 = require("zod");
async function update2(request, reply) {
  const updateTestCaseParamsSchema = import_zod13.z.object({
    testCaseId: import_zod13.z.string().uuid()
  });
  const updateTestCaseBodySchema = import_zod13.z.object({
    data: import_zod13.z.object({
      title: import_zod13.z.string().optional(),
      status: import_zod13.z.enum(["open", "in_progress", "error", "success"]).optional(),
      description: import_zod13.z.string().nullable().optional(),
      error_description: import_zod13.z.string().nullable().optional(),
      error_attachment: import_zod13.z.string().nullable().optional(),
      priority: import_zod13.z.enum(["not_set", "high", "medium", "low"]).optional(),
      type: import_zod13.z.enum([
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
      layer: import_zod13.z.enum(["not_set", "e2e", "api", "unit"]).optional(),
      behavior: import_zod13.z.enum(["not_set", "positive", "negative", "destructive"]).optional(),
      automation_status: import_zod13.z.enum(["not_automated", "to_be_automated", "automated"]).optional(),
      deadline: import_zod13.z.string().nullable().default(null)
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
var import_zod14 = require("zod");

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
  const assignTestCaseToUserParamsSchema = import_zod14.z.object({
    testCaseId: import_zod14.z.string().uuid()
  });
  const assignTestCaseToUserBodySchema = import_zod14.z.object({
    userEmail: import_zod14.z.string().email()
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
var import_zod15 = require("zod");

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
  const unassignTestCaseParamsSchema = import_zod15.z.object({
    testCaseId: import_zod15.z.string().uuid()
  });
  const { testCaseId } = unassignTestCaseParamsSchema.parse(request.params);
  const unassignTestCaseUseCase = makeUnassignTestCaseUseCase();
  const testCase = await unassignTestCaseUseCase.execute({
    testCaseId
  });
  return reply.status(200).send(testCase);
}

// src/http/controllers/test-cases/get-by-user.ts
var import_zod16 = require("zod");

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
  const getTestCasesByUserParamsSchema = import_zod16.z.object({
    userEmail: import_zod16.z.string().email()
  });
  const { userEmail } = getTestCasesByUserParamsSchema.parse(request.params);
  const getTestCasesByUserUseCase = makeGetTestCasesByUserUseCase();
  const testCases = await getTestCasesByUserUseCase.execute({
    userEmail
  });
  return reply.status(200).send(testCases);
}

// src/http/controllers/test-cases/routes.ts
async function testCasesRoutes(app2) {
  app2.addHook("onRequest", verifyJWT);
  app2.get("/test-cases/:testCaseId", details2);
  app2.post("/test-cases", create2);
  app2.get("/test-cases/user/:userEmail", getByUser);
  app2.patch("/test-cases/:testCaseId/update", update2);
  app2.patch("/test-cases/:testCaseId/assign", assignToUser);
  app2.patch("/test-cases/:testCaseId/unassign", unassign);
  app2.delete("/test-cases/:testCaseId", deleteTestCase);
}

// src/http/controllers/users/authenticate.ts
var import_zod17 = require("zod");

// src/use-cases/errors/invalid-credentials-error.ts
var InvalidCredentialsError = class extends Error {
  constructor() {
    super("Invalid credentials.");
  }
};

// src/use-cases/authenticate.ts
var import_bcryptjs = require("bcryptjs");
var AuthenticateUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    email,
    password
  }) {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new InvalidCredentialsError();
    }
    const doesPasswordMatches = await (0, import_bcryptjs.compare)(password, user.password_hash);
    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError();
    }
    return {
      user
    };
  }
};

// src/use-cases/factories/make-authenticate-use-case.ts
function makeAuthenticateUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const authenticateUseCase = new AuthenticateUseCase(usersRepository);
  return authenticateUseCase;
}

// src/http/controllers/users/authenticate.ts
async function authenticate(request, reply) {
  const authenticateBodySchema = import_zod17.z.object({
    email: import_zod17.z.string().email(),
    password: import_zod17.z.string().min(6)
  });
  const { email, password } = authenticateBodySchema.parse(request.body);
  try {
    const authenticateUseCase = makeAuthenticateUseCase();
    const { user } = await authenticateUseCase.execute({
      email,
      password
    });
    const token = await reply.jwtSign(
      {},
      {
        sign: {
          sub: user.id
        }
      }
    );
    const refreshtoken = await reply.jwtSign(
      {},
      {
        sign: {
          sub: user.id,
          expiresIn: "7d"
        }
      }
    );
    return reply.setCookie("refreshToken", refreshtoken, {
      path: "/",
      secure: true,
      sameSite: true,
      httpOnly: true
    }).status(200).send({
      token
    });
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: err.message });
    }
    throw err;
  }
}

// src/use-cases/get-users-by-partial-email.ts
var GetUsersByPartialEmailUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    email
  }) {
    const users = await this.usersRepository.findByPartialEmail(email);
    return { users };
  }
};

// src/use-cases/factories/make-get-users-by-partial-email-use-case.ts
function makeGetUsersByPartialEmailUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const useCase = new GetUsersByPartialEmailUseCase(usersRepository);
  return useCase;
}

// src/http/controllers/users/get-users-by-partial-email.ts
var import_zod18 = require("zod");
async function getUsers(request, reply) {
  const getMembersFromProjectParamsSchema = import_zod18.z.object({
    email: import_zod18.z.string().optional()
  });
  const { email } = getMembersFromProjectParamsSchema.parse(request.query);
  const getUsersByPartialEmailUseCase = makeGetUsersByPartialEmailUseCase();
  const users = await getUsersByPartialEmailUseCase.execute({
    email: email ?? ""
  });
  return reply.status(200).send(users);
}

// src/use-cases/get-user-profile.ts
var GetUserProfileUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    userId
  }) {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new ResourceNotFoundError();
    }
    return {
      user
    };
  }
};

// src/use-cases/factories/make-get-user-profile-use-case.ts
function makeGetUserProfileUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const useCase = new GetUserProfileUseCase(usersRepository);
  return useCase;
}

// src/http/controllers/users/profile.ts
async function profile(request, reply) {
  const getUserProfile = makeGetUserProfileUseCase();
  const { user } = await getUserProfile.execute({
    userId: request.user.sub
  });
  return reply.status(200).send({
    user: {
      ...user,
      password_hash: void 0
    }
  });
}

// src/http/controllers/users/refresh.ts
async function refresh(request, reply) {
  await request.jwtVerify({ onlyCookie: true });
  const token = await reply.jwtSign(
    {},
    {
      sign: {
        sub: request.user.sub
      }
    }
  );
  const refreshtoken = await reply.jwtSign(
    {},
    {
      sign: {
        sub: request.user.sub,
        expiresIn: "7d"
      }
    }
  );
  return reply.setCookie("refreshToken", refreshtoken, {
    path: "/",
    secure: true,
    sameSite: true,
    httpOnly: true
  }).status(200).send({
    token
  });
}

// src/http/controllers/users/register.ts
var import_zod19 = require("zod");

// src/use-cases/errors/user-already-exists-error.ts
var UserAlreadyExistsError = class extends Error {
  constructor() {
    super("E-mail already exists.");
  }
};

// src/use-cases/register.ts
var import_bcryptjs2 = require("bcryptjs");
var RegisterUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    name,
    email,
    password,
    avatar
  }) {
    const password_hash = await (0, import_bcryptjs2.hash)(password, 6);
    const userWithSameEmail = await this.usersRepository.findByEmail(email);
    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }
    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
      avatar
    });
    return {
      user
    };
  }
};

// src/use-cases/factories/make-register-use-case.ts
function makeRegisterUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const registerUseCase = new RegisterUseCase(usersRepository);
  return registerUseCase;
}

// src/http/controllers/users/register.ts
async function register(request, reply) {
  const registerBodySchema = import_zod19.z.object({
    name: import_zod19.z.string(),
    email: import_zod19.z.string().email(),
    password: import_zod19.z.string().min(6),
    avatar: import_zod19.z.string().optional().default("")
  });
  const { name, email, password, avatar } = registerBodySchema.parse(
    request.body
  );
  let user;
  try {
    const registerUseCase = makeRegisterUseCase();
    user = await registerUseCase.execute({
      name,
      email,
      password,
      avatar
    });
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }
    throw err;
  }
  return reply.status(201).send(user);
}

// src/http/controllers/users/routes.ts
async function usersRoutes(app2) {
  app2.get("/users", getUsers);
  app2.post("/users", register);
  app2.post("/sessions", authenticate);
  app2.patch("/token/refresh", refresh);
  app2.get("/me", { onRequest: [verifyJWT] }, profile);
}

// src/app.ts
var app = (0, import_fastify.default)();
app.register(import_cors.default, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"]
});
app.register(import_jwt.default, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: "refreshToken",
    signed: false
  },
  sign: {
    expiresIn: "120m"
  }
});
app.register(import_cookie.default);
app.register(usersRoutes);
app.register(projectsRoutes);
app.register(testCasesRoutes);
app.setErrorHandler((error, _, reply) => {
  if (error instanceof import_zod20.ZodError) {
    return reply.status(400).send({ message: "Validation error.", issues: error.format() });
  }
  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
  }
  return reply.status(500).send({ message: "Internal server error." });
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
