const express = require("express");
const router = express.Router();

const { verifySession } = require("../middlewares/verifySessionMiddleware");
const { createNewPost, readAllPosts, deletePost, updatePost, readOnePost } = require("../controllers/postOperationsController");
const { endSession } = require("../controllers/endSessionController");

router.get("/logout", endSession);

router.post("/", verifySession, createNewPost);
router.get("/", readAllPosts);
router.get("/:id", readOnePost);
router.delete("/", verifySession, deletePost);
router.put("/", verifySession, updatePost);

module.exports = router;