const router = require("express").Router();
const EmployeeController = require("../../Controllers/EmployeeController");
router
  .route("/")
  .get(EmployeeController.findAll)
  .post(EmployeeController.create);

router
  .route("/:id")
  .get(EmployeeController.findById)
  .put(EmployeeController.update)
  .delete(EmployeeController.remove);

module.exports = router
