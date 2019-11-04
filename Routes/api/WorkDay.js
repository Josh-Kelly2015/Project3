const router = require("express").Router();
const WorkDayController = require("../../Controllers/WorkDayController");
router
  .route("/")
  .get(WorkDayController.findAll)
  .post(WorkDayController.create);

router
  .route("/:id")
  .get(WorkDayController.findById)
  .put(WorkDayController.update)
  .delete(WorkDayController.remove);

module.exports = router;
