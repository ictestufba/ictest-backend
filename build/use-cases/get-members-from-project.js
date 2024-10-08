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

// src/use-cases/get-members-from-project.ts
var get_members_from_project_exports = {};
__export(get_members_from_project_exports, {
  GetMembersFromProjectUseCase: () => GetMembersFromProjectUseCase
});
module.exports = __toCommonJS(get_members_from_project_exports);

// src/use-cases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found.");
  }
};

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
        users.push({
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          created_at: user.created_at
        });
    }
    return { users };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetMembersFromProjectUseCase
});
