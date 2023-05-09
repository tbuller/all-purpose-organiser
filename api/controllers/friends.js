const Friend = require("../models/friend");

const FriendsController = {
  Create: (req, res, next) => {
    const friend = new Friend(req.body);
    friend.save((err, friend) => {
      if (err) {
        res.status(500).json({ message: "Bad request", err: err });
      } else {
        res.status(200).json({ message: "OK", friend: friend });
      }
    })
  },
  List: (req, res, next) => {
    Friend.find({}, (err, friends) => {
      if (err) {
        res.status(400).json({ message: "Bad request", err: err });
      } else {
        res.status(200).json({ message: "OK", friends: friends });
      }
    })
  }
}

module.exports = FriendsController;