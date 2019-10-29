const router = require("express").Router();
const employeeRoutes = require("./employee");
const projectRoutes = require("./project");

router.use("/employee", employeeRoutes);
router.use("/project", projectRoutes);

module.exports = router;
