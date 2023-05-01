import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/shoppingSlice';

const ItemForm = () => {

  const dispatch = useDispatch();

  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const createItem = () => {
    fetch("http://localhost:8080/shopping", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: itemName, quantity: quantity })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(addItem(data.shoppingItem));
      })
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
        <button className="item-quantity-button" onClick={() => handleQuantityChange(1)}>+</button>
        <button className="item-quantity-button" onClick={() => handleQuantityChange(-1)}>-</button>
        <p>{quantity}</p>
      </span>
      <button onClick={createItem}>Add Item</button>
    </div>
  )
}

export default ItemForm;