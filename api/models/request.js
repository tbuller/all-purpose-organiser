const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  requesterId: { type: String, required: true },
  requesteeId: { type: String, required: true }
})

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;