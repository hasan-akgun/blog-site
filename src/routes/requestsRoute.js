const express = require("express");
const router = express.Router();

const { uploadFile } = require("../middlewares/uploadFileMiddleware");
const { saveRequest, readAllRequests, acceptRequest, deleteRequest } = require("../controllers/requestController");
const { verifySession } = require("../middlewares/verifySessionMiddleware");
const { deleteFile } = require("../middlewares/deleteFileMiddleware");
const { sendMailToUser } = require("../controllers/mailerController");

router.post("/", uploadFile, saveRequest, sendMailToUser );
router.post("/accept", verifySession, deleteFile, acceptRequest, sendMailToUser, deleteRequest);
router.delete("/delete", verifySession, deleteRequest);
router.get("/",  verifySession, readAllRequests)


module.exports = router;