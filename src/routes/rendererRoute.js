const express = require("express");
const router = express.Router();

const { renderView } = require("../controllers/renderController");

router.get('/:page', renderView);

module.exports = router