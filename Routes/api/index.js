const router = require("express").Router();
const EmployeeRoutes = require("./Employee");
const ProjectRoutes = require("./Project");
router.use("/employee", EmployeeRoutes);
router.use("/project", ProjectRoutes);

module.exports = router;
