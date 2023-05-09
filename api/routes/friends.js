const express = require("express");
const router = express.Router();

const FriendsController = require("../controllers/friends");

router.post("/", FriendsController.Create);
router.get("/", FriendsController.List);

module.exports = router;