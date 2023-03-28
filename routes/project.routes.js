import express from "express"

import {
  createProject,
  getAllProjects,
  deleteProject
} from "../controllers/project.controller.js"

const projectRouter = express.Router()

projectRouter.route("/").post(createProject)
projectRouter.route("/").get(getAllProjects)
projectRouter.route("/:id").delete(deleteProject)

export { projectRouter }
