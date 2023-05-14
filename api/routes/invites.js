const express = require("express");
const router = express.Router();

const InvitesController = require("../controllers/invites");

router.post("/", InvitesController.Create);
router.get("/", InvitesController.List);
router.delete("/", InvitesController.Delete);

module.exports = router;