const express = require("express");
const router = express.Router();

const {verifyUser} = require("../middlewares/loginMiddleware");
const { createSession } = require("../controllers/createSessionController");
const { validateUsername, validateHTML } = require("../middlewares/validationMiddleware");

router.post("/", validateUsername, validateHTML, verifyUser, createSession);

module.exports = router;