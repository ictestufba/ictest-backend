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
