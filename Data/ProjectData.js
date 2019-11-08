const mongoose = require("mongoose");
const db = require("../Models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weschedule");

const ProjectSchema = [
  {
    projectName: "Project Name One",
    // active: true,
    employees: []
  }
];
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
