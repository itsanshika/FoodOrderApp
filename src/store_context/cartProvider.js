//this file manages the cart-context
import React, { useReducer } from 'react';
import CartContext from './Cart-context';

const defaultCart={
    items: [],
    totalAmount:0
}

function cartReducer(state,action)
{
if(action.type==='ADDITEM')
{
   const updatingItems=state.items.concat(action.items)//concat is a javascript funtion which add the item into array and return new array.unlike puhsing items in the existing array.
const updatingTotalAmount=state.totalAmount+action.items.price*action.item.amount;

return {
    items: updatingItems,
    totalAmount: updatingTotalAmount,
    
}

}

    return defaultCart;
}

function CartProvider(props)
{
const [cartState,dispatchCartfun]= useReducer(cartReducer,defaultCart);


function addItemHandler(item)
{
    dispatchCartfun({type:"ADDITEM",items:item})

}
function removeItemHandler(id)
{
    dispatchCartfun({type:"REMOVE",item_id:id})
}

const cartContext={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: addItemHandler ,
    removeItm: removeItemHandler
}

  return <CartContext.Provider value ={cartContext}>
      {props.children}
  </CartContext.Provider>
}

//any component wrapped with this Cartprovider will get access to this CartContext data.As Cart Provider is a Provider which have access to context to all of  its childerns.
export default CartProvider;