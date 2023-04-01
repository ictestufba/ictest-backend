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
  try {
    const { project_id } = req.params
    const suites = await Suite.find({ project_id: project_id })

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
    const {
      suite_id,
      title,
      status,
      description = "",
      severity,
      priority,
      type,
      layer,
      is_flaky,
      behavior,
      automation_status,
      pre_conditions,
      post_conditions,
      attachments = [],
      steps
    } = req.body


    const suite = await Suite.findById(suite_id)
    if (!suite) {
      res.status(404).json({ message: "Suite not found" })
    }

    const newCase = {
      title,
      status,
      description,
      severity,
      priority,
      type,
      layer,
      is_flaky,
      behavior,
      automation_status,
      pre_conditions,
      post_conditions,
      attachments,
      steps,
    }

    suite.cases.push(newCase)
    await suite.save()

    res.status(200).json({ message: "Cases added to suite successfuly", data: newCase })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

export const getCaseDetails = async (req, res) => {
  try {

    const { suite_id, case_id } = req.params

    const suite = await Suite.findById(suite_id)
    if (!suite) {
      res.status(404).json({ message: "Suite not found" })
    }

    else {
      const testCase = suite.cases.id(case_id)
      if (!testCase) {
        res.status(404).json({ message: "Test case not found" })
      } else {
        res.status(200).json(testCase)
      }
    }

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteCase = async (req, res) => {
  try {

    const { suite_id, case_id } = req.params

    const suite = await Suite.findById(suite_id)
    if (!suite) {
      res.status(404).json({ message: "Suite not found" })
    } 

    else {
      const testCase = suite.cases.id(case_id)
      if (!testCase) {
        res.status(404).json({ message: "Test case not found" })
      } else {
        testCase.remove()
        await suite.save()
        res.status(200).json({ message: "Test case deleted successfully" })
      }
    }

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateCase = async (req, res) => {
  try {

    const { suite_id, case_id } = req.params
    const suite = await Suite.findById(suite_id)

    if (!suite) {
      res.status(404).json({ message: "Suite not found" })
    } 
    else {
      const testCase = suite.cases.id(case_id)
      if (!testCase) {
        res.status(404).json({ message: "Test case not found" })
      } 
      else {
        const {
          title,
          status,
          description = "",
          severity,
          priority,
          type,
          layer,
          is_flaky,
          behavior,
          automation_status,
          pre_conditions,
          post_conditions,
          attachments = [],
          steps
        } = req.body

        testCase.set({
          title,
          status,
          description,
          severity,
          priority,
          type,
          layer,
          is_flaky,
          behavior,
          automation_status,
          pre_conditions,
          post_conditions,
          attachments,
          steps,
        })

        await suite.save()
        res.status(200).json({ message: "Test case updated successfully", data: testCase })
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
