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
  },
  Delete: (req, res, next) => {
    const filter = { _id: req.body._id };
    Event.findOneAndDelete(filter, (err, event) => {
      if (err) {
        res.status(400).json({ message: "Bad request", err: err, req: req.body });
      } else {
        res.status(200).json({ message: "OK", event: event });
      }
    })
  }
}

module.exports = EventsController;