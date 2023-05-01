const express = require("express");
const router = express.Router();

const ShoppingItemsController = require("../controllers/shoppingItems");

router.post("/", ShoppingItemsController.Create);
router.get("/", ShoppingItemsController.List);
router.patch("/", ShoppingItemsController.ChangeQuantity);

module.exports = router;