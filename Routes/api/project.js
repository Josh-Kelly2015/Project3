const router = require("express").Router();
const ProjectController = require("../../Controllers/projectController");
router
  .route("/")
  .get(ProjectController.findAll)
  .post(ProjectController.create);

router
  .route("/:id")
  .get(ProjectController.findById)
  .put(ProjectController.update)
  .delete(ProjectController.remove);
module.exports = router;
