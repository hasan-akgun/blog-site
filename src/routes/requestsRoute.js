const express = require("express");
const router = express.Router();

const { uploadFile } = require("../middlewares/uploadFileMiddleware");
const { saveRequest } = require("../controllers/requestController");

router.post("/", uploadFile, saveRequest );


module.exports = router;