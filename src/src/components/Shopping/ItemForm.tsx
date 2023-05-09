import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { addItem } from '../../redux/shoppingSlice';
import '../../styling/Shopping/ItemForm.scss';

interface ItemFormProps {
  setShowItemForm: (value: boolean) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ setShowItemForm }) => {

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);

  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const createItem = () => {
    fetch("http://localhost:8080/shopping", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ creatorId: loggedInUser?._id, name: itemName, quantity: quantity })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(addItem(data.shoppingItem));
      })
      
    setShowItemForm(false);  
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  }

  const handleQuantityChange = (changeAmount: number) => {
    setQuantity((prevQuantity) => prevQuantity + changeAmount);
  }

  return (
    <div className="item-form-container">
      <h3 className="item-form-header">Add shopping item</h3>
      <label className="item-name-label">Item name:</label>
      <input className="item-name-input" type="text" onChange={handleNameChange} />
      <label className="item-quantity-label">Choose quantity:</label>
      <span className="item-quantity-buttons-container">
        <button className="item-quantity-button" onClick={() => handleQuantityChange(1)}>+</button>
        <button className="item-quantity-button minus" onClick={() => handleQuantityChange(-1)}>-</button>
        <p className="item-form-quantity-text">{quantity}</p>
      </span>
      <button className="create-item-button" onClick={createItem}>Add Item</button>
    </div>
  )
}

export default ItemForm;