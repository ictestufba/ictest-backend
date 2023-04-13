import { TestCase } from "../mongodb/models/testcase.js"

export const createTestCase = async (req, res) => {
  try {
    const {
      title,
      status,
      description = "",
      suite_id = "",
      project_id,
      severity,
      priority,
      type,
      is_flaky,
      behavior,
      automation_status,
      pre_conditions = "",
      post_conditions = "",
      attachments = "",
      assignees = []
    } = req.body

    const testCase = new TestCase({
      title,
      status,
      description,
      suite_id,
      project_id,
      severity,
      priority,
      type,
      is_flaky,
      behavior,
      automation_status,
      pre_conditions,
      post_conditions,
      attachments,
      assignees
    })

    await testCase.save()

    res.status(201).json(testCase)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteTestCase = async (req, res) => {
  try {
    const { id } = req.params

    const testCase = await TestCase.findByIdAndDelete(id)

    if (!testCase) {
      return res.status(404).json({ message: "TestCase not found" })
    }

    res.status(200).json({ message: "TestCase deleted successfuly" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getTestCaseDetails = async (req, res) => {
  try {
    const { id } = req.params

    const testCase = await TestCase.findById(id)

    if (!testCase) {
      return res.status(404).json({ message: "Test case not found" })
    }

    res.status(200).json(testCase)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateTestCase = async (req, res) => {
  try {
    const { id } = req.params

    const {
      title,
      status,
      description = "",
      suite_id = "",
      project_id,
      severity,
      priority,
      type,
      is_flaky,
      behavior,
      automation_status,
      pre_conditions = "",
      post_conditions = "",
      attachments = "",
      assignees = []
    } = req.body

    await TestCase.findByIdAndUpdate(
      { _id: id },
      {
        title,
        status,
        description,
        suite_id,
        project_id,
        severity,
        priority,
        type,
        is_flaky,
        behavior,
        automation_status,
        pre_conditions,
        post_conditions,
        attachments,
        assignees
      }
    )

    res.status(200).json({ message: "Test case updated successfuly" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllTestCasesFromAProject = async (req, res) => {
  try {
    const { project_id } = req.params
    const testCases = await TestCase.find({ project_id: project_id })

    if (!testCases) {
      return res.status(404).json({ message: "TestCase not found" })
    }

    res.status(200).json(testCases)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllTestCasesAssignedToAUser = async (req, res) => {
  try {
    const { user_id } = req.params

    const testCases = await TestCase.find({ assignees: user_id })

    if (!testCases) {
      return res.status(404).json({ message: "There are no test cases assigned for this user" })
    }

    res.status(200).json(testCases)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const assignTestCaseToUser = async (req, res) => {
  try {

    const { id, user_id } = req.params
    const testCase = await TestCase.findById(id)

    testCase.assignees.push(user_id)
    await testCase.save()

    res.status(200).json({ testCase })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}