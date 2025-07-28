const express = require("express");
const router = express.Router();

const { uploadFile } = require("../middlewares/uploadFileMiddleware");
const { saveRequest, readAllRequests } = require("../controllers/requestController");

router.post("/", uploadFile, saveRequest );
router.get("/", readAllRequests)


module.exports = router;