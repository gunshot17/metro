const express = require("express");
const { createUser, login, logout } = require("../controller/user");
const auth = require("../middleware/auth");

const router = express.Router();

// api/v1/users
router.route("/").post(createUser);
router.route("/login").post(login);
router.route("/logout").delete(auth, logout);

module.exports = router;
