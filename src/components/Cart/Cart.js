import React from "react";
import classes from "./Cart.module.css";
import Model from '../UI/Model';

function Cart(props) {
  const cartItems = <ul className={classes['cart-items']}>{[
    { id: "c1", name: "Sushi", amount: "2", price: "12.99" },
  ].map((item) => <li>{item.name}</li>)}</ul>;
 

  return (
  
  
  
  <Model onClose={props.onCartShow}>
      {cartItems}
      <div className={classes.total}>
          Total Amount
          <span>35.62</span>
      </div>
      <div className={classes.actions}>
          <button className={classes['buttons--alt'] } onClick={props.onCartShow} >Close</button>
          <button className={classes.button} >Order</button>
      </div>
    </Model>
  );
}

export default Cart;
