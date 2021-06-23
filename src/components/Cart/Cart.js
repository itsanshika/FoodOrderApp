import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import CartContext from "../../store_context/Cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  function addOnHandler(item) {
   const itemAdd={
     ...item,
     amount: 1
   };

cartCtx.addItem(itemAdd);


  }

  function removeOnHandler(id) {
  

   const itemIndex= cartCtx.items.findIndex((item)=> item.id===id);
   
  const existingItem= cartCtx.items[itemIndex];
  if(existingItem.amount>1)
  {
  const updateItem=
  {
    ...existingItem,
    amount:-1,


  };
  cartCtx.addItem(updateItem);
}
else{
  cartCtx.removeItem(id);
}


  
 
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addOnHandler.bind(null, item)} //bind s used to pass data to those function
          onRemove={removeOnHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Model onClose={props.onCartShow}>
      {cartItems}
      <div className={classes.total}>
        Total Amount
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["buttons--alt"]} onClick={props.onCartShow}>
          Close
        </button>
        {cartCtx.items.length !== 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Model>
  );
}

export default Cart;
