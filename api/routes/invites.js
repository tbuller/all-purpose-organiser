const express = require("express");
const router = express.Router();

const InvitesController = require("../controllers/invites");

router.post("/", InvitesController.Create);
router.get("/", InvitesController.List);

module.exports = router;