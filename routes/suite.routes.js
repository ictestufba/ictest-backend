import express from "express"

import {
  createSuite,
  getAllSuites,
  deleteSuite,
  getSuiteDetails,
  updateSuite,
  getAllSuitesFromAProject,
  addCasesToSuite
} from "../controllers/suite.controller.js"

const suiteRouter = express.Router()

suiteRouter.route("/").post(createSuite)
suiteRouter.route("/").get(getAllSuites)
suiteRouter.route("/:id").delete(deleteSuite)
suiteRouter.route("/:id").get(getSuiteDetails)
suiteRouter.route("/:id").patch(updateSuite)
suiteRouter.route("/:project_id/list-suites").get(getAllSuitesFromAProject)
suiteRouter.route("/:suite_id/add-cases").patch(addCasesToSuite)
suiteRouter.route("/:suite_id/cases/:case_id").get(getCaseDetails)
suiteRouter.route("/:suite_id/cases/:case_id").delete(deleteCase)
suiteRouter.route("/:suite_id/cases/:case_id").put(updateCase)

export { suiteRouter }
