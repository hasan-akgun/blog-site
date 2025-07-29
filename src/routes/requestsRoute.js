const express = require("express");
const router = express.Router();

const { uploadFile } = require("../middlewares/uploadFileMiddleware");
const { saveRequest, readAllRequests } = require("../controllers/requestController");
const { validateUsername } = require("../middlewares/validationMiddleware");

router.post("/",  uploadFile, validateUsername, saveRequest );
router.get("/", readAllRequests)


module.exports = router;