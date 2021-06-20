import React from 'react';

 const CartContext = React.createContext(  {
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeIetm: (id)=>{}
    
});

export default CartContext;