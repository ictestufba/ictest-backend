import mongoose from "mongoose"

const SuiteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    preconditions: { type: String, required: true },
    suites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Suite", required: false }],
    cases: [{
      title: { type: String, required: true },
      status: {
        type: String,
        enum: ["actual", "draft", "deprecated"],
        default: "actual",
        required: true
      },
      description: { type: String, required: false },
      severity: {
        type: String,
        enum: ["not_set", "blocker", "critical", "major", "normal", "minor", "trivial"],
        default: "not_set",
        required: true
      },
      priority: {
        type: String,
        enum: ["not_set", "low", "medium", "high"],
        default: "not_set",
        required: true
      },
      type: {
        type: String,
        enum: ["other", "functional", "smoke", "regression", "security", "usability", "performance", "acceptance", "compatibility", "integration", "exploratory"],
        default: "other",
        required: true
      },
      layer: {
        type: String,
        enum: ["not_set", "e2e", "api", "unit"],
        default: "not_set",
        required: true
      },
      is_flaky: { type: Boolean, required: true, default: false },
      behavior: {
        type: String,
        enum: ["not_set", "positive", "negative", "destructive"],
        default: "not_set",
      },
      automation_status: {
        type: String,
        enum: ["non_automated", "to_be_automated", "automated"],
        default: "non_automated",
        required: true
      },
      pre_conditions: { type: String, required: false },
      post_conditions: { type: String, required: false },
      attachments: [{ type: String, required: false }],
      steps: [{
        action: { type: String, required: true },
        data: { type: String, required: true },
        expected_result: { type: String, required: true },
        attachments: [{ type: String, required: false }]
      }],
    }],

    project_id: { type: String, required: true },
  },
  {
    timestamps: true
  }
)

export const Suite = mongoose.model("Suite", SuiteSchema)
