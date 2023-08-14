const { cUser } = require("../contollers");
const { mAuth, isAdmin } = require("../middelwares");

const router = require("express").Router();

// Get users
router.get("/", mAuth, isAdmin, cUser.getUsers);
// Get user info (users + salaries)
router.get("/:id", mAuth, cUser.getUser);
// Change user salary
router.patch("/", mAuth, isAdmin, cUser.editUser);

module.exports = router;
