import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

//  cartCtx.addItem({
//     id: props.id,
//     name: props.name,
//     amount: amount,
//     price: props.price
//   });
//this is structure of items array defined in MealItems.js

export default CartContext;
