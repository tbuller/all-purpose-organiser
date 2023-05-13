const mongoose = require("mongoose");

const InviteSchema = new mongoose.Schema({
  eventId: { type: String, required: true },
  inviterId: { type: String, required: true },
  inviteeId: { type: String, required: true },
  inviteDay: { type: String, required: true }
})

const Invite = mongoose.model("Invite", InviteSchema);

module.exports = Invite;