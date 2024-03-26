const express = require("express");

const router = express.Router();
const meteorsController = require("../controllers/meteorsController");

router.get("/", meteorsController.getAllMeteors);

module.exports = router;
