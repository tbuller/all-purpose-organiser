const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
  requesterId: { type: String, required: true },
  accepterId: { type: String, required: true }
})

const Friend = mongoose.model("Friend", FriendSchema);

module.exports = Friend;