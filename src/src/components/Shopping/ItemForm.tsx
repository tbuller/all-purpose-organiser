import React from 'react'
import { useState, useEffect } from 'react';

const ItemForm = () => {

  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const createItem = () => {
    fetch("http://localhost:8080/shopping", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ itemName: itemName, quantity: quantity })
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  }

  const handleQuantityChange = (changeAmount: number) => {
    setQuantity((prevQuantity) => prevQuantity + changeAmount);
  }

  return (
    <div className="item-form-container">
      <label className="item-name-label">Please input the name of the item</label>
      <input className="item-name-input" type="text" onChange={handleNameChange} />
      <label className="item-quantity-label">Please choose the quantity desired</label>
      <span className="item-quantity-buttons-container">
        <button className="item-quantity-button">+</button>
        <button className="item-quantity-button">-</button>
        <p>{quantity}</p>
      </span>
    </div>
  )
}

export default ItemForm;