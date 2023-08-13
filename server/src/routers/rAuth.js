const router = require("express").Router();
const { cAuth } = require("../contollers");
const { mAuth, isAdmin } = require("../middelwares");

// Login
router.post("/login", cAuth.login);
// Create new user
router.post("/user", mAuth, isAdmin, cAuth.createUser);
// Edit new user
router.patch("/user", cAuth.editUser);

module.exports = router;
