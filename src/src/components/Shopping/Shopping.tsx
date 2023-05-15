import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { RootStateShopping, Item } from '../../redux/shoppingSlice';
import { setShopping } from '../../redux/shoppingSlice';
import ItemForm from './ItemForm';
import SingleItem from './SingleItem';
import '../../styling/Shopping/Shopping.scss';

const Shopping = () => {

  const dispatch = useDispatch();
  const loggedInUser = useSelector((state: RootStateUsers) => state.users.loggedInUser);
  const myShoppingItems = useSelector((state: RootStateShopping) => state.shopping.shoppingList.filter((item: Item) => item.creatorId === loggedInUser?._id))

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
      <button className="show-item-form-button" onClick={handleShowItemForm}>{showItemForm ? "Close item form" : "Add item to basket"}</button>
      <div className="item-form-wrapper">
      {showItemForm && <ItemForm setShowItemForm={setShowItemForm} />}
      </div>
      <div className="items-container">
        {myShoppingItems && myShoppingItems.map(item =>
          <SingleItem item={item} key={item._id} />
          )}
      </div>
    </div>
  )
}

export default Shopping;