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

// src/http/controllers/projects/routes.ts
var routes_exports = {};
__export(routes_exports, {
  projectsRoutes: () => projectsRoutes
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

// src/http/controllers/projects/add-member.ts
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
      },
      select: {
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
async function projectsRoutes(app) {
  app.addHook("onRequest", verifyJWT);
  app.get("/projects", list);
  app.get("/projects/:projectId", details);
  app.get("/projects/:projectId/test-cases", getTestCases);
  app.post("/projects", create);
  app.patch("/projects/:projectId/update", update);
  app.patch("/projects/:projectId/add-member", addMember);
  app.delete("/projects/:projectId/remove-member", removeMember);
  app.get("/projects/:projectId/members", getMembers);
  app.delete("/projects/:projectId", deleteProject);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  projectsRoutes
});
