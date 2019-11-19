const router = require("express").Router();
const UserController = require("../../Controllers/userController");
router
  .route("/")
  .get(UserController.findAll)
  .post(UserController.create);

router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.remove);

module.exports = router;
