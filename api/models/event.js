const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  day: { type: String, required: true },
  creatorId: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  people: { type: String, required: false },
  time: { type: String, required: true }
})

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;