import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShopping } from '../../redux/shoppingSlice';
import ItemForm from './ItemForm';

const Shopping = () => {

  const dispatch = useDispatch();

  const [showItemForm, setShowItemForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/shopping")
      .then(response => response.json())
      .then(data => {
        dispatch(setShopping(data.shoppingItems));
      })
  }, [])

  const handleShowItemForm = () => {
    setShowItemForm(!showItemForm);
  }

  return (
    <div className="shopping-page-container">
      <button onClick={handleShowItemForm}>{showItemForm ? "Close item form" : "Open item form"}</button>
      {showItemForm && <ItemForm />}
    </div>
  )
}

export default Shopping;