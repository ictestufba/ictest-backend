import { Suite } from "../mongodb/models/suite.js"

export const createSuite = async (req, res) => {
  try {
    const {
      title,
      description = "",
      preconditions,
      suites = [],
      cases = [],
      project_id,
    } = req.body

    const suite = new Suite({
      title,
      description,
      preconditions,
      suites,
      cases,
      project_id
    })

    await suite.save()

    res.status(201).json(suite)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllSuites = async (req, res) => {
  try {
    const suites = await Suite.find()

    res.status(200).json(suites)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteSuite = async (req, res) => {
  try {
    const { id } = req.params

    const suite = await Suite.findByIdAndDelete(id)

    if (!suite) {
      return res.status(404).json({ message: "Suite not found" })
    }

    res.status(200).json({ message: "Suite deleted successfuly" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getSuiteDetails = async (req, res) => {
  try {
    const { id } = req.params

    const suite = await Suite.findById(id)

    if (!suite) {
      return res.status(404).json({ message: "Suite not found" })
    }

    res.status(200).json(suite)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateSuite = async (req, res) => {
  try {
    const { id } = req.params

    const { title, description, preconditions, suites, cases, project_id } = req.body

    await Suite.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        preconditions,
        suites,
        cases,
        project_id
      }
    )

    res.status(200).json({ message: "Suite updated successfuly" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllSuitesFromAProject = async (req, res) => {
    try{
        const { project_id } = req.params
        const suites = await Suite.find({ project_id: project_id})

        if (!suites) {
            return res.status(404).json({ message: "Suite not found" })
          }

        res.status(200).json(suites)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const addCasesToSuite = async (req, res) => {
  try {
    const { id } = req.params
    const { cases } = req.body

    if(!Array.isArray(cases)) {
      res.status(404).json({ message: "Cases not found, please provide a valid input"})
    }

    await Suite.findByIdAndUpdate(
      {_id: id},
      { cases }
    )

    res.status(200).json({ message: "Cases added to suite successfuly"})
  } catch (error) {
    res.status(500).json({ message: "Suite not found or 'cases' empty"})
  }
}