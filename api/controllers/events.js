const Event = require("../models/event");

const EventsController = {
  Create: (req, res, next) => {
    const event = new Event(req.body);
    event.save((err, event) => {
      if (err) {
        res.status(500).json({ message: "Bad request", err: err });
      } else {
        res.status(200).json({ message: "OK", event: event });
      }
    })
  },
  List: (req, res, next) => {
    Event.find({}, (err, events) => {
      if (err) {
        res.status(400).json({ message: "Bad request", err: err });
      } else {
        res.status(200).json({ message: "OK", events: events });
      }
    })
  }
}

module.exports = EventsController;