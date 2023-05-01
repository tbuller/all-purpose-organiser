const express = require("express");
const router = express.Router();

const NotesController = require("../controllers/notes");

router.post("/", NotesController.Create);
router.get("/", NotesController.List);
router.delete("/", NotesController.Delete);

module.exports = router;