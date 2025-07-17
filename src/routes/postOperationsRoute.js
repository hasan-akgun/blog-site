const express = require("express");
const router = express.Router();

const { verifySession } = require("../middlewares/verifySessionMiddleware");
const { createNewPost, readAllPosts, deletePost, updatePost, readOnePost } = require("../controllers/postOperationsController");

router.post("/", verifySession, createNewPost);
router.get("/", verifySession, readAllPosts);
router.get("/:id", verifySession, readOnePost);
router.delete("/", verifySession, deletePost);
router.put("/", verifySession, updatePost);

module.exports = router;