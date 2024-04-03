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

// src/repositories/in-memory/in-memory-projects-repository.ts
var in_memory_projects_repository_exports = {};
__export(in_memory_projects_repository_exports, {
  InMemoryProjectsRepository: () => InMemoryProjectsRepository
});
module.exports = __toCommonJS(in_memory_projects_repository_exports);
var import_node_crypto = require("crypto");
var InMemoryProjectsRepository = class {
  constructor() {
    this.items = [];
  }
  async findById(id) {
    const project = this.items.find((item) => item.id === id);
    if (!project || project.is_deleted)
      return null;
    return project;
  }
  async create(data) {
    const project = {
      id: data.id ?? (0, import_node_crypto.randomUUID)(),
      name: data.name,
      code: data.code,
      description: data.description ?? null,
      members: [],
      created_at: /* @__PURE__ */ new Date(),
      updated_at: /* @__PURE__ */ new Date(),
      is_deleted: false
    };
    this.items.push(project);
    return project;
  }
  async list() {
    return this.items.filter((project) => !project.is_deleted);
  }
  async delete(projectId) {
    const index = this.items.findIndex((project) => project.id === projectId);
    this.items[index].is_deleted = true;
  }
  async findByIdAndUpdate(projectId, data) {
    const index = this.items.findIndex((project) => project.id === projectId);
    if (index === -1 || this.items[index].is_deleted)
      return null;
    this.items[index] = { ...this.items[index], ...data };
    return this.items[index];
  }
  async addMember(projectId, userId, role) {
    const index = this.items.findIndex((project) => project.id === projectId);
    this.items[index].members.push(userId);
  }
  async getMemberIds(projectId) {
    const project = this.items.find((item) => item.id === projectId);
    if (!project || project.is_deleted)
      return null;
    return project.members;
  }
  async removeMember(projectId, userId) {
    const project = this.items.find((item) => item.id === projectId);
    if (!project || project.is_deleted)
      return;
    const index = project.members.indexOf(userId);
    if (index !== -1) {
      project.members.splice(index, 1);
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryProjectsRepository
});
