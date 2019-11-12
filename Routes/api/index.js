const router = require("express").Router();
const EmployeeRoutes = require("./Employee");
const ProjectRoutes = require("./Project");
// const UserRoutes = require("./user");
router.use("/employee", EmployeeRoutes);
router.use("/project", ProjectRoutes);
// router.use("/user", UserRoutes);

module.exports = router;
