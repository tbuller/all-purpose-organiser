const Request = require("../models/request");

const RequestsController = {
  Create: (req, res, next) => {
    const request = new Request(req.body);
    request.save((err, request) => {
      if (err) {
        res.status(500).json({ message: "Bad request", err: err });
      } else {
        res.status(200).json({ message: "OK", request: request });
      }
    })
  },
  List: (req, res, next) => {
    Request.find({}, (err, requests) => {
      if (err) {
        res.status(400).json({ message: "Bad request", err: err });
      } else {
        res.status(200).json({ message: "OK", requests: requests });
      }
    })
  }
}

module.exports = RequestsController;