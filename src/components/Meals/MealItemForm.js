import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

function MealItemForm(props) {
  const inputAmount = useRef();
  const [error, setError] = useState(false); // valid to add in cart
  function submitHandler(event) {
    event.preventDefault();

    const enteredAmount = inputAmount.current.value; //Ref always return value in form of string hence + is added in strating in ordervto convert it into number.
    const enteredAmountNumber = +enteredAmount;
    // console.log(enteredAmount+1);
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 50
    ) {
      setError(true);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
     
      <Input
        ref={inputAmount}
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "50",
          step: "1",
          defaultValue: "1",
        }}
      />

      {/* double curly braces: ont to read the JSX element and other because passed input is an object */}

    
 <button>+ Add</button>
      {error && (
        <div>
          <p>Please Enter a Valid Amount (1-50)</p>
        </div>
      )}
    </form>
  );
}
export default MealItemForm;
