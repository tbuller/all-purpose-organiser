const express = require ("express");
const router = express.Router();

const EventsController = require("../controllers/events");

router.post("/", EventsController.Create);
router.get("/", EventsController.List);

module.exports = router;