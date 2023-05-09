const express = require("express");
const router = express.Router();

const RequestsController = require("../controllers/requests");

router.post("/", RequestsController.Create);
router.get("/", RequestsController.List);

module.exports = router;