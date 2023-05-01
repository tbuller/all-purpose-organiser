const mongoose = require("mongoose");

const ShoppingItemSchema = new mongoose.Schema({
  creatorId: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true }
})

const ShoppingItem = mongoose.model("ShoppingItem", ShoppingItemSchema);

module.exports = ShoppingItem;