import express from "express"

import {
  createProject,
  getAllProjects,
  deleteProject,
  getProjectDetails,
  updateProject,
  addUserToProject
} from "../controllers/project.controller.js"

const projectRouter = express.Router()

projectRouter.route("/").post(createProject)
projectRouter.route("/").get(getAllProjects)
projectRouter.route("/:id").delete(deleteProject)
projectRouter.route("/:id").get(getProjectDetails)
projectRouter.route("/:id").patch(updateProject)
projectRouter.route("/:id/:user_id").patch(addUserToProject)


export { projectRouter }
