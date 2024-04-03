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

// src/use-cases/delete-project.ts
var delete_project_exports = {};
__export(delete_project_exports, {
  DeleteProjectUseCase: () => DeleteProjectUseCase
});
module.exports = __toCommonJS(delete_project_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DeleteProjectUseCase
});
