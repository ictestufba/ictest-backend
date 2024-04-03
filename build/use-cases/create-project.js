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

// src/use-cases/create-project.ts
var create_project_exports = {};
__export(create_project_exports, {
  CreateProjectUseCase: () => CreateProjectUseCase
});
module.exports = __toCommonJS(create_project_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateProjectUseCase
});
