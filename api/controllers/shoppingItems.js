const ShoppingItem = require("../models/shoppingItem");

const ShoppingItemsController = {
  Create: (req, res, next) => {
    const shoppingItem = new ShoppingItem(req.body);
    shoppingItem.save((err, shoppingItem) => {
      if (err) {
        res.status(500).json({ message: "Bad request", err: err });
      } else {
        res.status(200).json({ message: "OK", shoppingItem: shoppingItem });
      }
    })
  },
  List: (req, res, next) => {
    ShoppingItem.find({}, (err, shoppingItems) => {
      if (err) {
        res.status(400).json({ message: "Bad request", err: err });
      } else {
        res.status(200).json({ message: "OK", shoppingItems: shoppingItems });
      }
    })
  },
  ChangeQuantity: (req, res, next) => {
    const { itemId, quantityChange } = req.body;
    ShoppingItem.findByIdAndUpdate(itemId, { $inc: { quantity: quantityChange } }, { new: true }, (err, shoppingItem) => {
      if (err) {
        res.status(500).json({ message: "Bad request", err: err })
      } else {
        if (shoppingItem && shoppingItem.quantity <= 0) {
          ShoppingItem.findByIdAndDelete(itemId, (err) => {
            if (err) {
              res.status(500).json({ message: "failed to dete item", err: err });
            } else {
              res.status(200).json({ message: "Item successfully delete", shoppingItem: null });
            }            
          })
        } else {
          res.status(200).json({ message: "OK", shoppingItem: shoppingItem });
        }
      }
    })
  }
}

module.exports = ShoppingItemsController;