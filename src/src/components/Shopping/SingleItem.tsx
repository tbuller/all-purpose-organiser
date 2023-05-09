import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Item } from '../../redux/shoppingSlice';
import { updateItem } from '../../redux/shoppingSlice';

interface SingleItemProps {
  item: Item;
}

const SingleItem: React.FC<SingleItemProps> = ({ item }) => {

  const dispatch = useDispatch();

  const [itemPhotoUrl, setItemPhotoUrl] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/unsplash", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ itemName: item.name })
    })
      .then(response => response.json())
      .then(data => setItemPhotoUrl(data.data.results[0].urls.small))
  })

  const handleChangeQuantity = (quantityChange: number) => {
    fetch("http://localhost:8080/shopping", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ itemId: item._id, quantityChange: quantityChange })
    })
      .then(response => response.json())
      .then(data => {
        dispatch(updateItem(data.shoppingItem));
      })
  }

  return (
    <span className="individual-shopping-item-container">
      <img src={itemPhotoUrl} />
      <p>{item.name}</p>
      <p>{item.quantity}</p>
      <button className="change-quantity-button" onClick={() => handleChangeQuantity(1)}>+</button>
      <button className="change-quantity-button" onClick={() => handleChangeQuantity(-1)}>-</button>
    </span>
  )
}

export default SingleItem;