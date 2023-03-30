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
suiteRouter.route("/:project_id/list").get(getAllSuitesFromAProject)
suiteRouter.route("/:id/add-cases").post(addCasesToSuite)

export { suiteRouter }
