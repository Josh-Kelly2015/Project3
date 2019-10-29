const router = require("express").Router();
const employeeController = require("../../Controllers/employeeController");
router
  .route("/")
  .get(employeeController.findAll)
  .post(employeeController.create);

router
  .route("/:id")
  .get(employeeController.findById)
  .put(employeeController.update)
  .delete(employeeController.remove);

module.exports = router;
