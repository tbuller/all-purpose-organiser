const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  creatorId: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;