const mongoose = require("mongoose");

const InviteSchema = new mongoose.Schema({
  inviterId: { type: String, required: true },
  inviteeId: { type: String, required: true }
})

const Invite = mongoose.model("Invite", InviteSchema);

module.exports = Invite;