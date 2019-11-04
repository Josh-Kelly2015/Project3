const router = require("express").Router();
const WorkWeekController = require("../../Controllers/WorkWeekController");
router
  .route("/")
  .get(WorkWeekController.findAll)
  .post(WorkWeekController.create);

router
  .route("/:id")
  .get(WorkWeekController.findById)
  .put(WorkWeekController.update)
  .delete(WorkWeekController.remove);

module.exports = router;
