import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store_context/Cart-context";

function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  function addToCartHandler(amount) {
    // console.log(amount);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.discription}>{props.defi}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.key} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
export default MealItem;
