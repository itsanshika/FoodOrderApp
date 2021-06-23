//this file manages the cart-context
import React, { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.type === "ADDITEM") {
    const updatingTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const itemExistAlreadyIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[itemExistAlreadyIndex];

    let updatedItems;
    //console.log(action.item.amount);

    if (existingCartItem) {
      //console.log( existingCartItem.amount + action.item.amount);

      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[itemExistAlreadyIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item); //concat is a javascript funtion which add the item into array and return new array.unlike puhsing items in the existing array.
    }
    return {
      items: updatedItems,
      totalAmount: updatingTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item_id
    );

    const existingItem = state.items[itemIndex];
    const updatedItems = state.items.filter(
      (item) => item.id !== action.item_id
    );
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCart;
}

function CartProvider(props) {
  const [cartState, dispatchCartfun] = useReducer(cartReducer, defaultCart);

  function addItemHandler(item) {
    dispatchCartfun({ type: "ADDITEM", item: item });
  }
  function removeItemHandler(id) {
    dispatchCartfun({ type: "REMOVE", item_id: id });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

//any component wrapped with this Cartprovider will get access to this CartContext data.As Cart Provider is a Provider which have access to context to all of  its childerns.
export default CartProvider;
