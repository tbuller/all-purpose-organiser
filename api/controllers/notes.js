const Note = require("../models/note");

const NotesController = {
  Create: (req, res, next) => {
    const note = new Note(req.body);
    note.save((err, note) => {
      if (err) {
        res.status(500).json({ message: "Bad request", err: err });
      } else {
        res.status(200).json({ message: "OK", note: note })
      }
    })
  },
  List: (req, res, next) => {
    Note.find({}, (err, notes) => {
      if (err) {
        res.status(400).json({ message: "Bad request", err: err });
      } else {
        res.status(200).json({ message: "OK", notes: notes });
      }
    })
  }
}