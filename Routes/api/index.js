const router = require("express").Router();
const UserRoutes = require("./user");
const ProjectRoutes = require("./project");
// const UserRoutes = require("./user");
router.use("/user", UserRoutes);
router.use("/project", ProjectRoutes);
// router.use("/user", UserRoutes);

module.exports = router;
