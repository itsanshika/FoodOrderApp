import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

function MealItemForm(props) {
  return (
    <form className={classes.form}>

      <button className={classes.plus}>+</button>

      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount_"+props.id,
          min: "1",
          max:'50',
          step: "1",
          defaultValue: "0",
        }}
      />
      {/* double curly braces: ont to read the JSX element and other because passed input is an object */}

      <button className={classes.minus}>-</button>
    </form>
  );
}
export default MealItemForm;
