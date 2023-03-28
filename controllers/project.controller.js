import { Project } from "../mongodb/models/project.js"

export const createProject = async (req, res) => {
  try {
    const {
      name,
      code,
      description = "",
      access_type,
      member_access
    } = req.body

    const project = new Project({
      name,
      code,
      description,
      access_type,
      member_access
    })

    await project.save()

    res.status(201).json(project)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find()

    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params

    const project = await Project.findByIdAndDelete(id)

    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }

    res.status(200).json({ message: "Project deleted successfuly" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getProjectDetails = async (req, res) => {
  try {
    const { id } = req.params

    const project = await Project.findById(id)

    if (!project) {
      return res.status(404).json({ message: "Project not found" })
    }

    res.status(200).json(project)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params

    const { name, code, description, access_type, member_access } = req.body

    await Project.findByIdAndUpdate(
      { _id: id },
      {
        name,
        code,
        description,
        access_type,
        member_access
      }
    )

    res.status(200).json({ message: "Project updated successfuly" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
