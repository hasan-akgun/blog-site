const express = require("express");
const router = express.Router();

const {verifyUser} = require("../middlewares/loginMiddleware");
const { createSession } = require("../controllers/createSessionController");

router.post("/", verifyUser, createSession);

module.exports = router;