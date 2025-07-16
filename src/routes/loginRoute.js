const express = require("express");
const router = express.Router();

const {verifyUser} = require("../middlewares/loginMiddleware");

router.post("/", verifyUser);

module.exports = router;