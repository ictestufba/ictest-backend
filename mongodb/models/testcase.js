import mongoose from "mongoose"

const TestCaseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    status: {
      type: String,
      enum: ["actual", "draft", "deprecated"],
      default: "actual",
      required: true
    },
    description: { type: String, required: false },
    suite_id: { type: String, required: false },
    project_id: { type: String, required: true },
    severity: {
      type: String,
      enum: ["not_set", "blocker", "critical", "major", "minor", "trivial", "normal"],
      default: "normal",
      required: true
    },
    priority: {
      type: String,
      enum: ["not_set", "medium", "low", "high"],
      default: "not_set",
      required: true
    },
    type: {
      type: String,
      enum: [
        "other"
        , "functional"
        , "smoke"
        , "regression"
        , "security"
        , "usability"
        , "performance"
        , "acceptance"
        , "compatibility"
        , "integration"
        , "exploratory"
        ,
      ],
      default: "actual",
      required: true
    },
    is_flaky: { type: Boolean, required: true },
    behavior: {
      type: String,
      enum: ["not_set", "positive", "negative", "destructive"],
      default: "not_set",
      required: true
    },
    automation_status: {
      type: String,
      enum: ["not_automated", "to_be_automated", "automated"],
      default: "not_automated",
      required: true
    },
    pre_conditions: { type: String, required: false },
    post_conditions: { type: String, required: false },
    attachments: { type: String, required: false },
  },
  {
    timestamps: true
  }
)

export const TestCase = mongoose.model("TestCase", TestCaseSchema)
