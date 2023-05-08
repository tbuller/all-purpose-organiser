const express = require("express");
const router = express.Router();

const UnsplashController = require("../controllers/unsplash");

router.post("/", UnsplashController.RetrieveData);

module.exports = router;

