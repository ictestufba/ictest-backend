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

// src/http/controllers/projects/delete-project.ts
var delete_project_exports = {};
__export(delete_project_exports, {
  deleteProject: () => deleteProject
});
module.exports = __toCommonJS(delete_project_exports);
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

// src/use-cases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found.");
  }
};

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
  const deleteProjectParamsSchema = import_zod2.z.object({
    projectId: import_zod2.z.string().uuid()
  });
  const { projectId } = deleteProjectParamsSchema.parse(request.params);
  const deleteProjectUseCase = makeDeleteProjectUseCase();
  await deleteProjectUseCase.execute({
    projectId
  });
  return reply.status(200).send();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  deleteProject
});
