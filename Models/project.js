const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  assignedUsers: [{ type: Schema.Types.ObjectId, ref: "user" }]
});
const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;
