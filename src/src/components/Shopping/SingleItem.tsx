import React from 'react';
import { useDispatch } from 'react-redux';
import { Item } from '../../redux/shoppingSlice';
import { changeQuantity } from '../../redux/shoppingSlice';

interface SingleItemProps {
  item: Item;
}

const SingleItem: React.FC<SingleItemProps> = ({ item }) => {

  const dispatch = useDispatch();

  const handleChangeQuantity = (quantityChange: number) => {
    fetch("http://localhost:8080/shopping", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ itemId: item._id, quantityChange: quantityChange })
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <span className="individual-shopping-item-container">
      <p>{item.name}</p>
      <p>{item.quantity}</p>
      <button className="change-quantity-button">+</button>
      <button className="change-quantity-button">-</button>
    </span>
  )
}

export default SingleItem;