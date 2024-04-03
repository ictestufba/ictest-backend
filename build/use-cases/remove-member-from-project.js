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

// src/use-cases/remove-member-from-project.ts
var remove_member_from_project_exports = {};
__export(remove_member_from_project_exports, {
  RemoveMemberFromProjectUseCase: () => RemoveMemberFromProjectUseCase
});
module.exports = __toCommonJS(remove_member_from_project_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RemoveMemberFromProjectUseCase
});
