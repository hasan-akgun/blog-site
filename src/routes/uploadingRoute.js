const express = require("express");
const { uploadFile } = require("../controllers/uploadFileController");
const router = express.Router();

router.post("/", uploadFile);


module.exports = router;