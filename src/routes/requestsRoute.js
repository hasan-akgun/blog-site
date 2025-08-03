const express = require("express");
const router = express.Router();

const { uploadFile } = require("../middlewares/uploadFileMiddleware");
const { saveRequest, readAllRequests, acceptRequest, deleteRequest } = require("../controllers/requestController");
const { verifySession } = require("../middlewares/verifySessionMiddleware");
const { deleteFile } = require("../middlewares/deleteFileMiddleware");

router.post("/", uploadFile, saveRequest );
router.post("/accept", verifySession, deleteFile, acceptRequest, deleteRequest);
router.delete("/delete", verifySession, deleteRequest);
router.get("/",  verifySession, readAllRequests)


module.exports = router;