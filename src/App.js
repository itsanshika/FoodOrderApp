import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store_context/cartProvider";

function App() {

  const [shown,setshown]=useState(false);

 function showHandler()
 {
   setshown(true);
 };

 function hideHandler()
 {
   setshown(false);
 };



  return (
    <CartProvider>
      {shown && <Cart onCartShow={hideHandler}/>}  
      <Header  onNoCardShown={showHandler}/>
      <main>
        <Meals />
      </main>
      </CartProvider>
  );
}

export default App;
