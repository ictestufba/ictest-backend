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

// src/repositories/in-memory/in-memory-test-cases-repository.ts
var in_memory_test_cases_repository_exports = {};
__export(in_memory_test_cases_repository_exports, {
  InMemoryTestCasesRepository: () => InMemoryTestCasesRepository
});
module.exports = __toCommonJS(in_memory_test_cases_repository_exports);
var import_node_crypto = require("crypto");
var InMemoryTestCasesRepository = class {
  constructor() {
    this.items = [];
  }
  async findById(id) {
    const testCase = this.items.find((item) => item.id === id);
    if (!testCase || testCase.is_deleted)
      return null;
    return testCase;
  }
  async create(data) {
    const testCase = {
      id: data.id ?? (0, import_node_crypto.randomUUID)(),
      title: data.title,
      status: data.status ?? "open",
      description: data.description ?? null,
      project_id: data.project_id ?? null,
      priority: data.priority ?? "not_set",
      type: data.type ?? "other",
      layer: data.layer ?? "not_set",
      behavior: data.behavior ?? "not_set",
      automation_status: data.automation_status ?? "not_automated",
      deadline: data.deadline ? new Date(data.deadline) : null,
      attachment: data.attachment ?? null,
      assigned_to: data.assigned_to ?? null,
      created_at: /* @__PURE__ */ new Date(),
      updated_at: /* @__PURE__ */ new Date(),
      is_deleted: false,
      error_attachment: null,
      error_description: null
    };
    this.items.push(testCase);
    return testCase;
  }
  async delete(testCaseId) {
    const index = this.items.findIndex((testCase) => testCase.id === testCaseId);
    this.items[index].is_deleted = true;
  }
  async getTestCasesByProjectId(projectId) {
    const testCases = this.items.filter(
      (item) => item.project_id === projectId && !item.is_deleted
    );
    return testCases;
  }
  async findByAndUpdate(testCaseId, data) {
    const index = this.items.findIndex((testCase) => testCase.id === testCaseId);
    if (index === -1 || this.items[index].is_deleted)
      return null;
    this.items[index] = { ...this.items[index], ...data };
    return this.items[index];
  }
  async assignToUser(testCaseId, userId) {
    const index = this.items.findIndex((testCase) => testCase.id === testCaseId);
    if (index === -1 || this.items[index].is_deleted)
      return null;
    this.items[index].assigned_to = userId;
    return this.items[index];
  }
  async unassign(testCaseId) {
    const index = this.items.findIndex((testCase) => testCase.id === testCaseId);
    if (index === -1 || this.items[index].is_deleted)
      return null;
    this.items[index].assigned_to = null;
    return this.items[index];
  }
  async getTestCasesByUser(userId) {
    const testCases = this.items.filter(
      (testCase) => testCase.assigned_to === userId && !testCase.is_deleted
    );
    return testCases;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InMemoryTestCasesRepository
});
