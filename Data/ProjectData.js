const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  projectName: { type: String, required: true },
  employees: [{ type: Schema.Types.ObjectId, ref: "employee" }]
});
const Project = mongoose.model("project", ProjectSchema);

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(ProjectSchema))
  .then(data => {
    console.log(data.result.n + " project records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
module.exports = Project;



