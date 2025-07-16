const express = require("express");
const router = express.Router();

const { renderView } = require("../controllers/renderController");
const { verifySession } = require("../middlewares/verifySessionMiddleware");

router.get('/:page', verifySession, renderView);
router.get('/', renderView)

module.exports = router